
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = '../podcast_summaries';
const DEST_DIR = 'src/content/blog';

// Ensure destination exists
if (!fs.existsSync(DEST_DIR)){
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} files to migrate...`);

files.forEach(file => {
    const sourcePath = path.join(SOURCE_DIR, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');
    const lines = content.split('\n');

    // Extract Metadata
    // 1. Title: First line starting with #
    let title = lines.find(l => l.startsWith('# '))?.replace('# ', '').trim() || file.replace('_summary.md', '');
    
    // 2. Guest: From filename
    const guest = file.replace('_summary.md', '').replace(/_/g, ' ');

    // 3. Description: Look for "**嘉宾简介**" and take the next non-empty line
    let description = '';
    const bioIndex = lines.findIndex(l => l.includes('**嘉宾简介**'));
    if (bioIndex !== -1 && lines[bioIndex + 1]) {
        // Try next line, or skip validation of next line if it's empty, find first non-empty
        for(let i = bioIndex + 1; i < lines.length; i++) {
            if (lines[i].trim()) {
                description = lines[i].trim();
                break;
            }
        }
    }
    
    // Fallback description
    if (!description) {
        description = `Summary of podcast with ${guest}`;
    }

    // Escape quotes in frontmatter
    const safeTitle = title.replace(/"/g, '\\"');
    const safeDesc = description.replace(/"/g, '\\"');
    const safeGuest = guest.replace(/"/g, '\\"');
    
    // Generate a consistent date (mock date or file stats, let's use current date or random for now to sort)
    // Better: use file creation time, or just today's date
    const stat = fs.statSync(sourcePath);
    const date = stat.birthtime.toISOString().split('T')[0];

    const frontmatter = `---
title: "${safeTitle}"
description: "${safeDesc}"
pubDate: "${date}"
heroImage: "/blog-placeholder-about.jpg"
guest: "${safeGuest}"
---

`;

    // Remove the original Title line to avoid duplication if desired, or keep it. 
    // Usually standard to keep H1 in body or remove it. Let's keep it for now as it's part of the content.
    
    const newContent = frontmatter + content;
    const destPath = path.join(DEST_DIR, file);
    
    fs.writeFileSync(destPath, newContent);
    console.log(`Migrated: ${file}`);
});

console.log('Migration complete!');


import fs from 'fs';
import path from 'path';

const SOURCE_DIR = '../podcast_summaries';
const DEST_DIR = 'src/content/blog';

// Ensure destination exists
if (fs.existsSync(DEST_DIR)) {
    // Clean existing files to handle deletions/renames
    const existing = fs.readdirSync(DEST_DIR);
    existing.forEach(file => fs.unlinkSync(path.join(DEST_DIR, file)));
} else {
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} files to migrate...`);

files.forEach(file => {
    const sourcePath = path.join(SOURCE_DIR, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');
    const lines = content.split('\n');

    // Extract Metadata
    // Extract Metadata
    // 1. Guest: From filename (Primary source of truth for Title too)
    const guest = file.replace('_summary.md', '').replace(/_/g, ' ');

    // 2. Title: Use Guest Name explicitly to keep cards clean
    let title = guest;

    // 3. Description: Look for "嘉宾简介" (handle ## header or ** bold)
    let description = '';
    const bioLineIndex = lines.findIndex(l => l.includes('嘉宾简介'));

    if (bioLineIndex !== -1) {
        let bioLine = lines[bioLineIndex];
        // Clean the marker itself (e.g. "## 嘉宾简介" or "**嘉宾简介**:")
        let content = bioLine.replace(/^[#\*\-\s]*嘉宾简介[：:]?[\*\s]*/, '').trim();

        if (content.length > 5) {
            // Content is on the same line
            description = content;
        } else {
            // Content is on subsequent lines
            for (let i = bioLineIndex + 1; i < lines.length; i++) {
                if (lines[i].trim()) {
                    description = lines[i].trim();
                    break;
                }
            }
        }
    }

    // Fallback description
    if (!description) {
        // Try to find Core Conclusions or other headers to use as teaser
        const coreIndex = lines.findIndex(l => l.includes('核心洞察'));
        if (coreIndex !== -1 && lines[coreIndex + 1]) {
            description = lines[coreIndex + 1].trim().replace(/^-\s*/, '');
        } else {
            description = `Insights from podcast with ${guest}`;
        }
    }

    // Clean Description: Remove Guest Name prefix if present to avoid redundancy
    // e.g. "Gustaf Alstromer - YC Partner..." -> "YC Partner..."
    if (guest && description.toLowerCase().startsWith(guest.toLowerCase())) {
        description = description.substring(guest.length).replace(/^[\s\-\–\—:：]+/, '').trim();
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

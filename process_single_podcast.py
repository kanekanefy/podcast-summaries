#!/usr/bin/env python3
"""
Process a single podcast transcript and generate a Chinese summary.
"""
import sys
import os
from pathlib import Path

def read_transcript(file_path):
    """Read the entire transcript file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def extract_key_sections(transcript):
    """Extract key sections from the transcript."""
    # This is a simplified extraction - we'll focus on key themes and quotes
    lines = transcript.split('\n')

    # Find key conversation points
    key_points = []
    for i, line in enumerate(lines):
        # Look for questions and substantial answers
        if '?' in line and i < len(lines) - 1:
            if len(lines[i+1]) > 100:  # Substantial answer
                key_points.append((line.strip(), lines[i+1].strip()))

    return key_points[:50]  # Limit to top 50 key exchanges

def main():
    if len(sys.argv) != 2:
        print("Usage: python process_single_podcast.py <transcript_file>")
        sys.exit(1)

    transcript_file = sys.argv[1]
    transcript_path = Path("/Users/kane/Desktop/project/podcast/Lenny's Podcast Transcripts Archive [public]") / transcript_file

    if not transcript_path.exists():
        print(f"File not found: {transcript_path}")
        sys.exit(1)

    print(f"Processing: {transcript_file}")
    print(f"Full path: {transcript_path}")

    # Read the transcript
    transcript = read_transcript(transcript_path)

    # Basic stats
    word_count = len(transcript.split())
    print(f"Word count: {word_count}")

    # Extract key sections
    key_points = extract_key_sections(transcript)
    print(f"\nFound {len(key_points)} key exchanges\n")

    # Print first 10 exchanges for context
    print("First 10 key exchanges:")
    for i, (question, answer) in enumerate(key_points[:10], 1):
        print(f"\n{i}. Q: {question[:150]}...")
        print(f"   A: {answer[:200]}...")

if __name__ == "__main__":
    main()

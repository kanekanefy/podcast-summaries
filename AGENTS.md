# AGENTS.md - Lenny's Podcast Summarization Project

This file documents the operational procedures, style guidelines, and workflows for agents working in this repository.

## 1. Project Overview
This repository contains transcripts from Lenny's Podcast and their corresponding AI-generated summaries in Chinese. The goal is to provide high-signal, "must-read" summaries that capture the essence of each episode.

## 2. Environment & Tools
- **Root Directory**: `/Users/kane/Desktop/project/podcast`
- **Transcripts Directory**: `Lenny's Podcast Transcripts Archive [public]/`
- **Summaries Directory**: `podcast_summaries/`
- **Prompts Directory**: `prompt_iterations/`
- **Progress Log**: `podcast_summaries/progress_log.txt`

## 3. "Build" Process (Summarization Workflow)
Since this is a content repository, the "build" process refers to generating summaries from transcripts.

### Standard Workflow
1.  **Select Batch**: Identify unprocessed transcripts from the Transcripts Directory.
2.  **Process**: For each transcript:
    *   Read the content.
    *   Generate a summary using **Prompt V5** (defined below).
    *   Save the summary to `podcast_summaries/[Original_Filename_No_Ext]_summary.md`.
3.  **Log**: Update `podcast_summaries/progress_log.txt` with the timestamp and filename of processed episodes.

### Commands (Agent Instructions)
*   **List Files**: `find "Lenny's Podcast Transcripts Archive [public]" -name "*.txt" | sort`
*   **Check Progress**: Read `podcast_summaries/progress_log.txt` or list files in `podcast_summaries/`.
*   **Generate Summary**: Use the `general` agent with `background_task` for parallel processing of batches (e.g., 5 files at a time).

## 4. Code/Content Style Guidelines

### File Naming Conventions
*   **Input**: Maintain original transcript filenames (e.g., `Ada Chen Rekhi.txt`).
*   **Output**: Use the exact guest name/filename suffix with `_summary.md` (e.g., `Ada Chen Rekhi_summary.md`).

### Prompt V5 Specification (The "Linter")
All summaries MUST adhere to the following structure and style constraints. This is the "coding style" for this project.

#### Role & Goal
*   **Role**: Master synthesizer of tech knowledge.
*   **Goal**: Comprehensive, insightful Chinese summaries that replace the need to listen.

#### Output Structure
1.  **Header**: `**嘉宾简介**: [Name] - [Title/Background] (1 sentence)`
2.  **Section 1: 核心议题 (The Questions)**
    *   Top 3-4 distinct, non-generic questions.
3.  **Section 2: 核心洞察 (Core Conclusions)**
    *   **Focus on Novelty**: Unique, non-obvious insights.
    *   **Metaphors**: MUST capture specific metaphors (e.g., "Magical Duct Tape").
    *   **Bilingual Terms**: Keep key English terms in brackets (e.g., "Kayfabe (组织表演)").
4.  **Section 3: 心法与原则 (Repeatedly Emphasized Points)**
    *   Underlying philosophy/mantras.
5.  **Section 4: 实战手册 (Specific Cases & Methodologies)**
    *   **Actionable Only**: Concrete steps.
    *   **Detail**: Go deep on *how* (numbers, rules, tools).
6.  **Section 5: 反常识视角 (Counter-intuitive Points)**
    *   Logic behind views contradicting common wisdom.
7.  **Section 6: 花絮与细节 (Interesting Details)**
    *   Habits, skills, book/movie recommendations (with reasons), anecdotes.

#### Style Rules
*   **Language**: Fluent, professional Chinese.
*   **Tone**: Punchy, active voice, no fluff.
*   **Formatting**: **Bold** the most high-impact phrases in every bullet point.
*   **Integrity**: No hallucinations; facts must come from the transcript.

## 5. Maintenance & Refactoring
*   **Prompt Iteration**: If the summary quality degrades or misses nuance, iterate on the prompt in `prompt_iterations/` and update this file.
*   **Directory Structure**: Do not create subdirectories per guest unless the volume becomes unmanageable. Keep flat structure in `podcast_summaries/`.

## 6. Example Usage (Agent Prompt)
```text
You are a podcast summarization agent. Process the following files: [List of files].
For each file:
1. Read content.
2. Apply Prompt V5 instructions.
3. Write to podcast_summaries/[Name]_summary.md.
```

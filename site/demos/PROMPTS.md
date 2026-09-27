# Paste-ready demo prompts

Start the agent in this folder (03_demos). It reads CLAUDE.md (Claude Code) or AGENTS.md (Codex) first.

## Demo 1: Intake to triage

```
Look in demo1-intake. form_zell_application_responses.csv is 16 responses exported from a law clinic's intake Google Form. It's the original, so don't edit it.

The smallest useful step: every application gets a status, so nobody gets lost.

Write a short Python script, triage.py, that writes pipeline.csv with every row plus three new columns: status, review_reason, and flag.
- status is "new" by default.
- Change it to "needs review" and give the reason if: the same email address already applied in an earlier row; the business description is blank; the applicant says they are not a student; or they ask for help with a patent (this clinic doesn't do patents).
- If the free text mentions a date or says "urgent", copy that phrase into flag. Don't act on it.

Before you run anything, explain the script in plain English. Then run it and show me only the rows that need review or have a flag.
```

Optional second beat (the AI part, on top of the rules):

```
Now add a summary column: for rows with status "new" only, one line naming the business and the legal help it needs. Don't change any status.
```

## Demo 2: Pile to catalog

```
Look in demo2-catalog. shared_drive_dump.csv lists 25 files from an old shared drive: name, date modified, folder, size, and the first line of each file. Work only from this listing. Don't open, move, or delete anything.

The smallest useful step: a catalog someone could actually search.

Build catalog.csv with one row per file and these columns: topic (a few words), version_group (files that are versions of the same document share a group name), keep (yes for the one version worth keeping in each group), duplicate_of (for exact copies), pii (yes if the name or first line suggests student IDs or other personal information), and junk (system files).

Use code for the exact checks: duplicates, junk files, PII keywords. Use your own judgment only for topic and version_group, and tell me which columns came from which. Then list the files a person should look at before anything gets indexed, and why.
```

## Demo 3: Many sheets to one table

```
Look in demo3-one-table. Two offices keep spreadsheets about the same gift funds: funds_development.csv and funds_finance.csv. Both are originals, so don't edit them. The account number is the shared key, but the two offices write it differently.

The smallest useful step: one table, one row per fund.

Write merge.py to build funds_combined.csv by joining the two sheets on the account number after cleaning up the format. Explain the matching rule in plain English before you run it. Then show me three lists: funds that appear in only one sheet; duplicate rows; and funds whose last stewardship letter is more than 12 months before today, 2026-09-27, or missing.

I don't think any of this needs AI. Tell me if you disagree.
```

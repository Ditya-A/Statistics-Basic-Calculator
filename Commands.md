The goal isn’t to memorize command strings. It’s to recognize **what changed** and recall the command that handles that change.

## Remember The Development Loop

Think of a Next.js app as four connected jobs:

```text
Change the interface or logic
        ↓
Run and test the app
        ↓
Change the database shape, if needed
        ↓
Save and share the work
```

Each job has a small command pattern.

**1. Start working**

```powershell
npm run dev
```

Mental cue: **“I’m developing, so start the dev server.”**

**2. Add or restore packages**

```powershell
npm install package-name
npm install
```

Mental cue: **“I need a new library” → install that package. “I got the project from GitHub” → install its listed dependencies.**

**3. Change the database schema**

```powershell
npx prisma format
npx prisma validate
npx prisma migrate dev --name describe_change
```

Mental cue: **“I changed the database shape” → format, check, migrate.**

**4. Change the Prisma schema or client setup**

```powershell
npx prisma generate
```

Mental cue: **“Prisma’s generated TypeScript client may be out of date” → generate it.**

**5. Check the app before sharing**

```powershell
npm run lint
npm run build
```

Mental cue: **“Before I push, check code quality and production compilation.”**

**6. Save and upload work**

```powershell
git status
git add .
git diff --cached
git commit -m "Describe the change"
git push
```

Mental cue: **“Inspect → stage → review → save → upload.”**

## Fast Recall Questions

When you get stuck, ask yourself:

- **What am I trying to do?** Start, install, migrate, check, or share?
- **Did I change application code or the database schema?**
- **Am I in the project root**, where `package.json` lives?
- **Did the command succeed?** Check its output before continuing.

These questions help you derive the command instead of memorizing a long list.

## Shortcuts While Working

- **Up arrow**: recall the previous terminal command.
- **Ctrl+R** in PowerShell or Git Bash: search command history.
- **Tab**: complete paths and command names.
- **`npm run`**: list the scripts defined in `package.json`.
- **`npx prisma --help`**: see Prisma commands and options.
- **`git status`**: quickly see what Git thinks changed.

You can create a personal command reference in your project’s `README.md`. Keep it short: organize commands by **intent** (“start app,” “schema changed,” “push changes”), not as a chronological transcript.

## How To Make The Recall Stick

Use active recall: hide the command list and explain the workflow from memory, then check what you missed. Review it after a day, a few days, and a week. The most useful practice is repeating the same small workflow in another project: start the app, make one change, test it, and commit it.

A compact memory phrase for this project:

```text
Start: npm run dev
Schema changed: Prisma format → validate → migrate → generate
Ready to share: lint → build → Git status → add → commit → push
```

You only need to remember the **reasoning and sequence**. Terminal history and project documentation can supply exact spelling when you need it.
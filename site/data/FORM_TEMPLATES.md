# Sandbox recipe: build the form, generate the dummies, then automate

The low-stakes sandbox every team builds in the first 20 minutes of the hands-on. Nothing real touches it.

## Step 0 — pick the form that looks like your client's intake (5 min)
| Client | Real intake | Sandbox form here |
|---|---|---|
| Zell Entrepreneurship Clinic | a Google Form, copied by hand into the "ZEC Pipeline" sheet | `form_zell_application_responses.csv` |
| Michigan Dining | five existing Google Forms, one per pillar | `form_dining_sustainability_responses.csv` |
| Innovation Partnerships (MTA) | screening questionnaire in eRPM | `form_mta_screening_responses.csv` (stand-in) |
| Michigan Medicine Faculty Development | interests "newly collected, e.g. a dropdown in the application" | `form_faculty_interest_responses.csv` |
| OVPR limited submissions | InfoReady applications | use the Zell form as a stand-in, or `requests_inbox` |
| Oakland County (FOIA), Basketball | email / multiple systems | `requests_inbox.txt` |
| Ginsberg, Marsal, FJA, CAI | drives, spreadsheets, portals | `shared_drive_dump.csv`, `terrible_notes.txt` |

## Step 1 — build the Google Form (5 min)
Create a new Google Form with the question titles from the CSV header (the header IS the form). Set the
short-answer / checkbox / dropdown types as the data suggests. Link responses to a new Sheet
(Responses tab → Sheets icon). Submit **two or three responses by hand** so the responses Sheet exists
and you can see a real submission land.

## Step 2 — generate dummy responses with U-M GPT (5 min)
Paste this, then paste the CSV header row after it:

> I am building a test copy of an intake form so I can develop an automation without touching real data.
> Here are the form's questions, as a CSV header. Generate 15 realistic fake responses as CSV rows with the
> same columns. Use fake names and @example.edu addresses. Make them varied and messy the way real
> submissions are: include one duplicate submission from the same person, one response with a required
> field left blank, one that answers two questions in one box, and one that is clearly outside what the
> form is for. Do not use any real person or organisation.

Or skip the generation and use the ready-made CSV for your form. Either way: **File → Import → Append to
current sheet** on the responses Sheet. (Imported rows do not fire the form-submit trigger; that is
fine, see Step 4.)

## Step 3 — the IDEA pass on your sandbox (10 min)
Identify: what does "done" look like for one submission? Document: source = the responses Sheet;
transformation = which fields become which output; output = a doc, an email, a status column, a row in
another sheet; what is fixed, what varies. Experiment: the smallest version. Adjust: what breaks.

## Step 4 — have the AI write the Apps Script, read it, run it (25 min)
Two shapes, both in Module 2's vocabulary:
- **Trigger on submit** (`onFormSubmit`): one new response → one output. Test by submitting a response by hand.
- **Process the backlog** (a function that walks every row whose Status column is empty, does the work,
  writes "done" + a timestamp): handles the imported dummies and is what Zell actually needs.
Use the worksheet's prompt shape: describe the columns, paste three sample rows, say what output you
want, ask for the code **and** a plain-English explanation of each section. Then the three checks from
the worksheet: what is the loop, where would a new field go, what tools and permissions does it need.
Run it in Extensions → Apps Script. Authorise when asked (this is the permissions lesson, live).

## Step 5 — watch it hit the planted problems, then adjust (5 min)
Every CSV has traps (see ANSWER_KEYS.md). The duplicate, the blank field, the two-answers-in-one-box.
Decide: rule, or manual review? Add a "needs review" status rather than guessing.

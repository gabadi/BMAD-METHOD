# Approve Story for Development

## Purpose

Product Owner validation and approval of story for development readiness.

## Inputs

- `story_file`: Path to the story file requiring approval
- `epic_number`: Epic number for alignment validation

## Outputs

- Story approval decision: APPROVED | NEEDS_REVISION
- Story file updated with approval status
- `{approval_notes_file}` (if issues found)

## Instructions

### Step 1: Load Story and Epic Context (1-2 minutes)

- Read the complete story file
- Read the parent epic file for business context
- Extract user story, acceptance criteria, and business context

### Step 2: Validate Story Readiness (2-3 minutes)

Check essential approval criteria:

**Business alignment:**

- Story supports epic business objectives
- User value is clear and measurable
- Acceptance criteria are specific and testable

**Development readiness:**

- Requirements are clear and unambiguous
- Scope is appropriate for single story
- Dependencies are identified

### Step 3: Make Approval Decision (1 minute)

**If story is ready:**
Update story file:

```markdown
## Story Approved for Development

**Status:** Approved
**Approved by:** PO
**Ready for:** Development
```

**If story needs revision:**
Create `{approval_notes_file}`:

```markdown
## Story Approval Issues

### Business Issues

- [Specific business alignment problem]
- [Value proposition unclear]

### Requirements Issues

- [Ambiguous acceptance criteria]
- [Missing requirements]

### Scope Issues

- [Story too large/complex]
- [Dependencies not identified]
```

**Max 15 lines. Focus on specific issues to fix, not approval process details.**

## Success Criteria

- [ ] Story business alignment validated
- [ ] Acceptance criteria are clear and testable
- [ ] Development scope is appropriate
- [ ] Clear approval decision made
- [ ] Issues documented with specific guidance if needed

## Integration Points

- **Input from:** Story creation process
- **Output to:** implement-story-development task (if approved)
- **Files created:** `{approval_notes_file}` (if issues found)

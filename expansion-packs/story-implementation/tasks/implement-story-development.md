# Implement Story Development

**Agent:** dev  
**Type:** BatchTask

## Purpose

Implement story requirements and document technical decisions made during implementation.

## Inputs

- Story file with acceptance criteria
- `blocking_issues` (array): Issues to fix from consolidation
- `technical_decisions` (array): Technical decisions to make

## Outputs

- `implementation_summary` (object): What was implemented and technical decisions made
- `implementation_status` (string): "Complete" | "Blocked"
- `quality_gates_status` (object): Status of project quality validation

## Instructions

### Step 1: Implement Acceptance Criteria (Main work)

Read story file and implement all acceptance criteria:

- Follow project coding standards
- Write tests as required by project
- Use project's build/validation tools
- Fix any blocking issues from input

### Step 2: Make Technical Decisions (As needed)

For decisions in input data:

- Research options and trade-offs
- Make implementation choice based on project constraints
- Document rationale for future reference

### Step 3: Validate Quality Gates

Run project quality validation:

- Build process
- Test suite
- Linting/formatting
- Any project-specific checks

### Step 4: Structure Implementation Output

Return structured data:

```yaml
implementation_summary:
  components_built:
    - component: "PanicButton"
      purpose: "Emergency navigation component"
      files: ["PanicButton.svelte", "PanicButton.test.js"]
    - component: "BreadcrumbTrail"
      purpose: "Navigation history display"
      files: ["BreadcrumbTrail.svelte", "BreadcrumbTrail.test.js"]

  technical_decisions:
    - decision: "State management"
      choice: "Svelte store"
      rationale: "Reactive updates, simpler than props drilling"
    - decision: "Styling approach"
      choice: "CSS modules"
      rationale: "Component isolation, avoid class conflicts"

  issues_resolved:
    - issue: "CSS syntax error fixed"
      solution: "Corrected semicolon in line 23"
    - issue: "Test coverage added"
      solution: "Added unit tests for error handling"

implementation_status: "Complete"

quality_gates_status:
  build: "PASS"
  tests: "PASS"
  linting: "PASS"
  coverage: "95%"
```

## Success Criteria

- [ ] All acceptance criteria implemented
- [ ] All blocking issues resolved
- [ ] Technical decisions documented with rationale
- [ ] Quality gates passing
- [ ] Structured output data provided

## Integration Points

- **Input from:** consolidate-review-feedback task
- **Output to:** validate-consolidated-fixes task
- **Data format:** Structured YAML objects

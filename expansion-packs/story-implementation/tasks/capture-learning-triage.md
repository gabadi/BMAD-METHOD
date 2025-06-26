# Capture Learning Triage

## Task Overview

**Agent:** architect  
**Action Type:** learning-triage  
**Duration:** 10-15 minutes  
**LLM-Optimized:** Token-efficient structured capture

## Purpose

Systematically capture and triage learnings from story implementation to drive continuous improvement and feed future epics.

## Inputs

- Story implementation file (docs/stories/epic{epic_number}.story{story_number}.story.md)
- All review feedback from Round 1 reviews
- Implementation fixes and changes
- Quality gate results and metrics

## Outputs

- Learning items captured in story file under ## Learning Triage section
- Categorized learning items with priorities and owners
- Action items for immediate and future implementation

## Learning Categories

### ARCH_CHANGE (Architecture Changes Required)

- **Purpose:** Technical debt or architecture improvements identified
- **Token Limit:** 50 tokens per item
- **Format:** `ARCH: [Component] - [Issue] - [Impact] - [Owner: architect]`
- **Priority:** HIGH/MEDIUM/LOW
- **Timeline:** Current epic / Next epic / Technical debt backlog

### FUTURE_EPIC (Epic Candidate Features)

- **Purpose:** Features or capabilities that emerged during implementation
- **Token Limit:** 50 tokens per item
- **Format:** `EPIC: [Feature] - [Business Value] - [Complexity] - [Owner: po]`
- **Priority:** HIGH/MEDIUM/LOW
- **Timeline:** Next sprint / Next quarter / Future roadmap

### URGENT_FIX (Critical Issues Requiring Immediate Attention)

- **Purpose:** Blockers or critical issues that need immediate resolution
- **Token Limit:** 50 tokens per item
- **Format:** `URGENT: [Issue] - [Impact] - [Fix Required] - [Owner: dev/architect]`
- **Priority:** CRITICAL (resolve within current sprint)
- **Timeline:** Immediate (within 1-2 days)

### PROCESS_IMPROVEMENT (Development Process Enhancements)

- **Purpose:** Workflow, tooling, or process improvements identified
- **Token Limit:** 50 tokens per item
- **Format:** `PROCESS: [Area] - [Current State] - [Improvement] - [Owner: sm]`
- **Priority:** HIGH/MEDIUM/LOW
- **Timeline:** Current sprint / Next sprint / Continuous improvement

### TOOLING (Development Tooling and Infrastructure)

- **Purpose:** Tools, automation, or infrastructure improvements needed
- **Token Limit:** 50 tokens per item
- **Format:** `TOOLING: [Tool/System] - [Gap] - [Solution] - [Owner: infra-devops-platform]`
- **Priority:** HIGH/MEDIUM/LOW
- **Timeline:** Current sprint / Next sprint / Infrastructure roadmap

### KNOWLEDGE_GAP (Team Knowledge and Training Needs)

- **Purpose:** Skills, knowledge, or training gaps identified during implementation
- **Token Limit:** 50 tokens per item
- **Format:** `KNOWLEDGE: [Area] - [Gap] - [Training Need] - [Owner: sm/po]`
- **Priority:** HIGH/MEDIUM/LOW
- **Timeline:** Current sprint / Next sprint / Long-term development

## Execution Steps

### Step 1: Review Implementation Context

```
CONTEXT_REVIEW:
- Story complexity: [SIMPLE/MODERATE/COMPLEX]
- Implementation time: [Actual vs Estimated]
- Quality gate failures: [Count and types]
- Review rounds required: [1/2/3+]
- Key technical challenges: [List top 3]
```

### Step 2: Evidence-First Learning Extraction (MANDATORY VALIDATION)

**CRITICAL FIRST STEP - Current State Audit:**
Before generating ANY learning items, mandatory verification:

1. **Existing Tooling Verification:**

   - Check project dependency manifests for existing tools/libraries
   - Verify current tooling installation and functionality
   - Test existing automation capabilities before suggesting new ones
   - Document what already works vs what's assumed missing

2. **Workflow Boundary Validation:**
   - Identify what workflows were actually used in this story
   - Review existing build/test/deployment scripts
   - Validate current workflow execution paths
   - Focus only on gaps exposed during THIS story execution

**Evidence-First Validation Framework:**
For each potential learning item, validate:

1. **Specific Problem Encountered:** "What exact issue occurred during story implementation?"
2. **Scope Boundary Check:** "Was this issue within the story workflow execution?"
3. **Current State Audit:** "What existing tools/processes already address this?"
4. **Solution Proportionality:** "Is proposed solution proportional to specific problem?"
5. **Evidence Requirement:** "What concrete evidence supports this need?"
6. **Methodology Decision Check:** "What methodology decision during this story contributed to this problem?"
7. **Alternative Approach Assessment:** "What alternative approach would have prevented this specific issue?"

**Scope Boundary Rules:**

**VALID Learning Item Scope:**
✅ Issues encountered during story implementation
✅ Knowledge gaps exposed during development
✅ Patterns discovered during coding
✅ Team capabilities revealed during execution
✅ Methodology decisions that created problems during execution
✅ Workflow selection issues revealed through story completion

**INVALID Learning Item Scope (REJECT IMMEDIATELY):**
❌ General process improvements not related to story
❌ Tooling enhancements without evidence of problems
❌ Workflow enhancements not used in story execution
❌ Preventive measures without specific incidents
❌ Security tooling suggestions beyond specific findings
❌ Automation suggestions for workflows not used in this story
❌ Methodology critiques without story execution evidence
❌ Workflow changes without proven alternative effectiveness

**Rejection Criteria:**

- Any validation fails → REJECT item
- Theoretical problems without evidence → REJECT
- Solutions outside story workflow scope → REJECT
- Over-engineered responses to simple issues → REJECT
- Assumptions about missing capabilities → REJECT

**For each category, scan implementation evidence:**

- Review feedback patterns (with evidence validation)
- Implementation fix patterns (with scope validation)
- Quality gate failure patterns (with proportionality check)
- Time/effort variance patterns (with current state audit)
- Technical decision points (with boundary validation)

### Step 3: Triage and Prioritize

```
TRIAGE_MATRIX:
High Priority: Blocks current/next sprint, affects team velocity
Medium Priority: Improves quality/efficiency, affects future work
Low Priority: Nice-to-have improvements, long-term optimization
```

### Step 4: Assign Owners and Timelines

```
OWNERSHIP_ASSIGNMENT:
- architect: Architecture, technical debt, system design
- po: Business features, epic candidates, requirements
- dev: Implementation issues, code quality, technical fixes
- sm: Process improvements, team coordination, knowledge gaps
- infra-devops-platform: Tooling, infrastructure, automation
```

## Success Criteria

- [ ] All learning categories reviewed and populated
- [ ] Each item under 50 tokens with clear action owner
- [ ] Priority and timeline assigned to each item
- [ ] Immediate actions (URGENT_FIX) clearly identified
- [ ] Future epic candidates captured with business value
- [ ] Learning items added to story file under ## Learning Triage

## Evidence Documentation

Update story file with:

```markdown
## Learning Triage

**Architect:** [Name] | **Date:** [YYYY-MM-DD] | **Duration:** [X minutes]

### ARCH_CHANGE

- ARCH: [Component] - [Issue] - [Impact] - [Owner: architect] | Priority: [HIGH/MEDIUM/LOW] | Timeline: [Current/Next/Backlog]

### FUTURE_EPIC

- EPIC: [Feature] - [Business Value] - [Complexity] - [Owner: po] | Priority: [HIGH/MEDIUM/LOW] | Timeline: [Next/Quarter/Future]

### URGENT_FIX

- URGENT: [Issue] - [Impact] - [Fix Required] - [Owner: dev/architect] | Priority: CRITICAL | Timeline: Immediate

### PROCESS_IMPROVEMENT

- PROCESS: [Area] - [Current State] - [Improvement] - [Owner: sm] | Priority: [HIGH/MEDIUM/LOW] | Timeline: [Current/Next/Continuous]

### TOOLING

- TOOLING: [Tool/System] - [Gap] - [Solution] - [Owner: infra-devops-platform] | Priority: [HIGH/MEDIUM/LOW] | Timeline: [Current/Next/Infrastructure]

### KNOWLEDGE_GAP

- KNOWLEDGE: [Area] - [Gap] - [Training Need] - [Owner: sm/po] | Priority: [HIGH/MEDIUM/LOW] | Timeline: [Current/Next/Long-term]

**Summary:** [X items captured] | [X urgent] | [X epic candidates] | [X process improvements]
```

## Integration Points

- **Input from:** validate_fixes (final architect review)
- **Output to:** party-mode-learning-review (collaborative review)
- **Handoff:** "Learning triage complete. Ready for collaborative review session."

## LLM Optimization Notes

- Token limits enforce brevity and focus
- Structured format enables rapid scanning
- Evidence-based categorization reduces subjective interpretation
- Clear ownership prevents action item limbo
- Timeline specificity enables proper backlog management

# Party Mode Learning Review

## Task Overview

**Agent:** architect (Technical Architect - Facilitator and Documenter)  
**Action Type:** collaborative-learning-review  
**Duration:** Flexible based on learning complexity  
**Participants:** Configurable at execution time based on story complexity and learning items  
**Collaborators:** Selected based on learning domain expertise requirements

## Purpose

Time-boxed collaborative review of learning triage items to validate priorities, assign ownership, and create actionable next steps with team consensus.

## Inputs

- Story file with completed ## Learning Triage section
- Learning items from capture-learning-triage task
- Implementation context and metrics

## Outputs

- Validated learning priorities with team consensus
- Clear ownership assignments and timelines
- Action items for immediate implementation
- Updated story file with ## Learning Review Results

## Multi-Agent Collaboration Protocol

### Pre-Review Setup

**Architect (Facilitator):**

```
SETUP:
- Review learning triage items across categories
- Identify high-priority items requiring discussion
- Determine appropriate participant involvement
- Prepare collaborative decision-making approach
```

### Review Process

#### Round 1: Mandatory Challenge Protocol

**CRITICAL REQUIREMENT:** Each agent MUST challenge at least 50% of proposed learning items with specific evidence requirements.

**Product Owner MUST Challenge:**

- "Does this deliver measurable business value?"
- "Is the problem scope worth the implementation investment?"
- "Was this issue a business blocker or technical preference?"
- "Is this within our story scope or future epic territory?"
- "Did this problem impact story delivery measurably?"
- "Was the methodology selection appropriate for this story's business context?"
- "Would a different approach have delivered business value faster?"

**Scrum Master MUST Challenge:**

- "Did this problem occur within our current workflow boundaries?"
- "Is this learning item scope-appropriate for story retrospective?"
- "Would this solution have prevented actual delays in THIS story?"
- "Are we solving a real problem or creating busywork?"
- "Was this within our actual workflow execution?"
- "Was the workflow selection appropriate for this story's complexity?"
- "Would a different process approach have reduced friction?"

**Developer MUST Challenge:**

- "Did we actually encounter this specific problem during implementation?"
- "Would the proposed solution have helped with the exact issue we faced?"
- "What existing tools already address this problem?"
- "Is this proportional to the actual issue we experienced?"
- "Are we solving for real vs theoretical problems?"
- "Was the technical approach selection appropriate for this implementation?"
- "Would a different development methodology have prevented this issue?"

**Architect MUST Challenge:**

- "Is the proposed solution proportional to the problem scope?"
- "Do we have evidence this architecture gap actually exists?"
- "Are we over-engineering based on one data point?"
- "What current tooling/patterns already handle this?"
- "Would this solution have prevented the specific issue we faced?"
- "Was the architecture methodology appropriate for this problem scope?"
- "Would a different technical approach have been more effective?"

**Evidence-Based Validation Requirements:**
Each agent must require:

- Specific evidence for problem claims
- Scope validation within story boundaries
- Effort justification for solutions
- Technical proportionality assessment
- Current state validation before new suggestions

#### Round 2: Evidence-Based Consensus Building

**Consensus Requirement Framework:**
Learning Item Acceptance Criteria:

- Unanimous agreement from all agents on problem existence
- Specific evidence provided for each learning item
- Scope validation confirmed by Scrum Master
- Effort justification approved by Product Owner
- Technical proportionality validated by Architect

**Rejection Triggers:**

- Any agent challenges scope without satisfactory evidence → REJECT
- Solution disproportionate to problem (Architect veto) → REJECT
- Outside workflow boundaries (Scrum Master veto) → REJECT
- No business value justification (Product Owner veto) → REJECT
- No evidence of actual problem (Developer veto) → REJECT

**Enhanced Consensus Building:**

```
EVIDENCE_VALIDATION_PROTOCOL:
- Each learning item must answer: "What specific problem occurred during story implementation?"
- Each agent validates: Evidence requirements met for their domain
- Unanimous consensus required for acceptance
- Active agreement required, not passive acceptance
- Evidence-based discussion for each item mandatory
```

#### Round 3: Action Planning

**Immediate Actions (Current Sprint):**

- URGENT_FIX items → Dev ownership, immediate timeline
- High-priority PROCESS items → SM coordination with architect technical input
- Critical ARCH_CHANGE → Architect planning

**Next Sprint Actions:**

- FUTURE_EPIC candidates → PO backlog integration
- Medium-priority improvements → Capacity planning
- TOOLING improvements → Infra coordination

### Rapid Decision Framework

#### Quick Wins (Implement immediately)

- Low effort, high impact improvements
- Simple process changes
- Quick tooling fixes

#### Strategic Investments (Plan for next sprint)

- Architecture improvements requiring design
- Epic candidates requiring analysis
- Process changes requiring team coordination

#### Long-term Improvements (Backlog)

- Complex architectural changes
- Major tooling upgrades
- Comprehensive training programs

## Collaboration Outputs

### Validated Learning Items

Each item updated with team consensus:

```
[CATEGORY]: [Item] - [Consensus Priority: HIGH/MEDIUM/LOW] - [Validated Owner] - [Agreed Timeline] - [Team Vote: X/4]
```

### Action Items

```
IMMEDIATE_ACTIONS (Current Sprint):
- [Action] - [Owner] - [Due Date] - [Success Criteria]

NEXT_SPRINT_ACTIONS:
- [Action] - [Owner] - [Sprint Planning Item] - [Dependencies]

BACKLOG_ITEMS:
- [Action] - [Owner] - [Epic/Initiative] - [Prerequisites]
```

### Team Consensus Summary

```
CONSENSUS_METRICS:
- Total items reviewed: [X]
- High priority consensus: [X items]
- Priority disagreements resolved: [X items]
- Immediate actions identified: [X items]
- Next sprint actions: [X items]
- Backlog items: [X items]
```

## Success Criteria

- [ ] All learning triage items reviewed by relevant domain experts
- [ ] Priority conflicts resolved through team consensus
- [ ] Clear ownership assigned to each action item
- [ ] Immediate actions identified with specific timelines
- [ ] Next sprint integration planned
- [ ] Team consensus achieved on all high-priority items

## Evidence Documentation

Update story file with:

```markdown
## Learning Review Results

**Architect (Facilitator & Technical Documenter):** [Name] | **Date:** [YYYY-MM-DD] | **Duration:** [X minutes]
**Participants:** architect (facilitator), po, sm, dev | **Session Type:** Technical Learning Categorization

### Team Consensus Items

#### IMMEDIATE_ACTIONS (Current Sprint)

- [Action] - [Owner] - [Due: YYYY-MM-DD] - [Success Criteria] | Team Vote: [X/4]

#### NEXT_SPRINT_ACTIONS

- [Action] - [Owner] - [Sprint Planning Item] - [Dependencies] | Team Vote: [X/4]

#### BACKLOG_ITEMS

- [Action] - [Owner] - [Epic/Initiative] - [Prerequisites] | Team Vote: [X/4]

### Consensus Metrics

- **Items Reviewed:** [X] | **High Priority:** [X] | **Immediate Actions:** [X]
- **Priority Conflicts Resolved:** [X] | **Team Consensus:** [X%]
- **Next Sprint Integration:** [X items] | **Backlog Items:** [X items]

### Key Decisions

- [Decision] - [Rationale] - [Team Vote: X/4]
- [Decision] - [Rationale] - [Team Vote: X/4]
```

## Integration Points

- **Input from:** capture-learning-triage (learning items)
- **Output to:** commit-and-prepare-pr (final story state)
- **Handoff:** "Technical learning review complete. Architect-led categorization consensus achieved. Technical documentation updated. Ready for commit and PR preparation."

## Session Management

- **Scope-driven duration:** Based on learning complexity rather than fixed time
- **Focus on outcomes:** Prioritize consensus over rigid timing
- **Flexible participation:** Include relevant domain experts as needed

## Facilitation Tips for Architect

- Lead technical learning categorization and pattern identification
- Keep discussions focused on actionable technical outcomes
- Use time-boxing to prevent lengthy technical debates
- Ensure all agents contribute to their domain items with technical context
- Document technical decisions and categorizations in real-time
- Escalate unresolved technical conflicts to architecture review
- Maintain final ownership of technical learning documentation

## LLM Optimization Notes

- Time-boxed collaboration prevents extended discussions
- Clear voting protocol resolves conflicts efficiently
- Structured output format enables rapid scanning
- Evidence-based consensus building reduces subjective debates
- Action-oriented focus drives immediate value delivery

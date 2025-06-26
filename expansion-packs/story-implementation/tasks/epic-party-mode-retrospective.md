# Epic Party Mode Retrospective

## Task Overview

**Agent:** sm (Scrum Master - Epic Retrospective Facilitator and Strategic Documenter)  
**Action Type:** multi-agent-epic-retrospective  
**Duration:** 45-60 minutes  
**Collaborators:** [architect, po, dev, ux-expert] as participants  
**LLM-Optimized:** Multi-agent collaborative epic insight generation

## Purpose

Conduct comprehensive epic retrospective with all key stakeholders to consolidate learnings from ALL stories, generate epic-level insights and patterns, create action items for next epic, and build team consensus on strategic improvements.

## Inputs

- Epic file with 100% completion status
- All completed story files from the epic
- Consolidated learning items from all stories
- Epic metrics and timeline data
- Quality scores and velocity trends

## Outputs

- Epic retrospective summary with consolidated insights
- Epic-level patterns and strategic learnings
- Action items for next epic with ownership
- Process improvements for future epics
- Epic completion artifacts and knowledge base

## Methodology Effectiveness Analysis

### Epic-Level Methodology Decision Patterns

**Implementation Approach Analysis:**

- Review all story implementation approach choices
- Identify patterns of appropriate vs inappropriate selections
- Document methodology decision effectiveness across epic

**Tool Selection Analysis:**

- Review all core task usage and tool choices
- Identify patterns of effective vs ineffective tool selections
- Document tool selection methodology across epic

**Agent Assignment Analysis:**

- Review all agent assignment decisions across stories
- Identify patterns of effective vs ineffective assignments
- Document assignment methodology effectiveness

**Approach Selection Analysis:**

- Review all technical/process approach decisions
- Identify patterns of successful vs problematic approach choices
- Document approach selection methodology across epic

## Multi-Agent Participants

- **sm** (Scrum Master) - Epic retrospective facilitator and strategic documentation owner
- **architect** (Technical Architect) - Technical patterns and architecture insights
- **po** (Product Owner) - Business patterns and value optimization
- **dev** (Developer) - Implementation patterns and technical debt
- **ux-expert** (UX Expert) - User experience patterns and design insights

## Execution Steps

### Step 1: Epic Data Auto-Calculation (5 minutes)

**Agent:** sm (Epic Retrospective Facilitator)  
Calculate epic metrics from existing story files:

```markdown
# Epic {epic_number} Retrospective Data (Auto-Calculated)

## Epic Overview (Derived)

- **Epic Title:** {from_epic_file}
- **Duration:** {first_story_date} to {last_story_completion} ({calculated_days} days)
- **Stories Completed:** {count_done_stories}
- **Team Members:** {extract_from_story_authors}

## Epic Metrics (Calculated)

- **Total Story Points:** {sum_from_stories}
- **Average Quality Score:** {average_quality_from_stories}/10
- **Average Review Rounds:** {calculated_from_stories}
- **Learning Items by Category:** {reference_story_learning_sections}

## Learning Data Sources (Referenced)

- **Story Learning Files:** {list_story_files_with_learning}
- **Epic Candidates:** {aggregate_future_epic_items}
- **Process Improvements:** {aggregate_process_items}
- **Architecture Items:** {aggregate_arch_items}

**Data Source:** Story files (Referenced, not duplicated)
**Calculation Method:** Automated aggregation from story completion data
```

### Step 2: Value-Focused Pattern Analysis (10 minutes)

**Question Framework for Each Agent:**

#### Architect Analysis

- "What architecture patterns ACTUALLY emerged across {story_count} stories?"
- "Which technical decisions had MEASURABLE impact on story velocity?"
- "What architecture debt ACTUALLY blocked story completion?"

#### Product Owner Analysis

- "What business value patterns delivered MEASURABLE user impact?"
- "Which stories generated actual user feedback or metrics?"
- "What business learning has ACTIONABLE next steps?"

#### Developer Analysis

- "What implementation patterns ACTUALLY reduced/increased effort?"
- "Which technical choices had MEASURABLE quality impact?"
- "What development practices ACTUALLY improved/hindered velocity?"

#### UX Expert Analysis

- "What UX patterns ACTUALLY improved user experience measurably?"
- "Which design decisions had MEASURABLE user impact?"
- "What accessibility improvements were ACTUALLY needed and used?"

**Evidence Requirement:** Each pattern must reference specific stories and measurable impact.

### Step 3: Party Mode Consensus Building (15 minutes)

**Facilitator:** sm (Epic Strategic Leader)  
**Participants:** All agents (architect, po, dev, ux-expert as collaborators)

#### Epic-Level Insights Voting

```markdown
## Epic Insights Consensus (Party Mode)

### Top 3 Epic Success Factors (Team Consensus)

1. **{success_factor_1}** | Votes: {vote_count}/5 | Priority: {HIGH/MEDIUM/LOW}

   - Evidence: {supporting_evidence}
   - Stories: {story_references}

2. **{success_factor_2}** | Votes: {vote_count}/5 | Priority: {HIGH/MEDIUM/LOW}

   - Evidence: {supporting_evidence}
   - Stories: {story_references}

3. **{success_factor_3}** | Votes: {vote_count}/5 | Priority: {HIGH/MEDIUM/LOW}
   - Evidence: {supporting_evidence}
   - Stories: {story_references}

### Top 3 Epic Improvement Areas (Team Consensus)

1. **{improvement_1}** | Votes: {vote_count}/5 | Impact: {HIGH/MEDIUM/LOW}

   - Root Cause: {cause_analysis}
   - Stories Affected: {story_references}

2. **{improvement_2}** | Votes: {vote_count}/5 | Impact: {HIGH/MEDIUM/LOW}

   - Root Cause: {cause_analysis}
   - Stories Affected: {story_references}

3. **{improvement_3}** | Votes: {vote_count}/5 | Impact: {HIGH/MEDIUM/LOW}
   - Root Cause: {cause_analysis}
   - Stories Affected: {story_references}
```

#### Future Epic Prioritization

```markdown
### Next Epic Action Items (Consensus)

#### Immediate Actions (Next Sprint)

- [ ] **{action_1}** | Owner: @{agent} | Due: {date} | Votes: {vote_count}/5
- [ ] **{action_2}** | Owner: @{agent} | Due: {date} | Votes: {vote_count}/5
- [ ] **{action_3}** | Owner: @{agent} | Due: {date} | Votes: {vote_count}/5

#### Next Epic Preparation

- [ ] **{prep_action_1}** | Owner: @{agent} | Timeline: {timeframe} | Priority: {HIGH/MEDIUM/LOW}
- [ ] **{prep_action_2}** | Owner: @{agent} | Timeline: {timeframe} | Priority: {HIGH/MEDIUM/LOW}
- [ ] **{prep_action_3}** | Owner: @{agent} | Timeline: {timeframe} | Priority: {HIGH/MEDIUM/LOW}

#### Strategic Improvements

- [ ] **{strategic_1}** | Owner: @{agent} | Timeline: {timeframe} | Impact: {HIGH/MEDIUM/LOW}
- [ ] **{strategic_2}** | Owner: @{agent} | Timeline: {timeframe} | Impact: {HIGH/MEDIUM/LOW}
```

### Step 4: Epic Knowledge Consolidation (5 minutes)

**Agent:** sm (Strategic Documentation Owner) with input validation from all agents

**Documentation Value Focus:**

- Focus on actionable insights vs comprehensive documentation
- Reference story learning sections vs duplicating content
- Apply documentation value test to each knowledge item

```markdown
## Epic {epic_number} Knowledge Summary

### Epic Completion Metrics (Auto-Calculated)

- **Business Value:** {calculated_from_stories}/10
- **Technical Quality:** {calculated_from_stories}/10
- **Team Velocity:** {calculated_from_stories}
- **Process Efficiency:** {derived_from_completion_times}

### Top 3 Success Patterns (Evidence-Based)

1. **{pattern}** | Evidence: {specific_stories} | Impact: {measurable_result}
2. **{pattern}** | Evidence: {specific_stories} | Impact: {measurable_result}
3. **{pattern}** | Evidence: {specific_stories} | Impact: {measurable_result}

### Top 3 Anti-Patterns (Evidence-Based)

1. **{anti_pattern}** | Evidence: {specific_stories} | Cost: {measurable_impact}
2. **{anti_pattern}** | Evidence: {specific_stories} | Cost: {measurable_impact}
3. **{anti_pattern}** | Evidence: {specific_stories} | Cost: {measurable_impact}

**Learning Data Source:** Individual story learning sections (referenced, not duplicated)
**Epic Metrics Source:** Calculated from completed story data
```

### Step 5: Epic Retrospective Summary (3 minutes)

**Agent:** sm (Strategic Documentation Owner)

Generate concise retrospective summary:

```markdown
# Epic {epic_number} Retrospective Summary

## Epic Completion (Auto-Calculated)

- **Duration:** {calculated_days} days | **Quality:** {avg_from_stories}/10 | **Velocity:** {calculated_velocity}
- **Learning Sources:** {story_count} story files with learning sections

## Key Insights (Evidence-Based)

### Replicate: {top_3_success_patterns_from_consensus}

### Avoid: {top_3_anti_patterns_from_consensus}

### Try Next: {top_3_experiments_from_consensus}

## Action Items (Consensus)

### Immediate: {immediate_actions_with_owners}

### Strategic: {strategic_actions_with_owners}

**Epic Status:** COMPLETE | **Team Consensus:** ACHIEVED | **Learning Data:** Referenced from story files
```

## Success Criteria

- [ ] Epic metrics auto-calculated from story completion data (no manual tracking)
- [ ] Learning data referenced from story files (no duplication)
- [ ] Value-focused pattern analysis completed with evidence requirements
- [ ] Team consensus achieved on top insights and improvements
- [ ] Action items defined with clear ownership and timelines
- [ ] Concise retrospective summary created with strategic focus
- [ ] Next epic preparation actions identified and assigned

## Party Mode Consensus Protocol

- **Voting:** Each agent votes on insights (1-5 scale)
- **Consensus Threshold:** 60% agreement (3/5 agents)
- **Conflict Resolution:** SM facilitates strategic discussion until consensus with focus on epic-level process insights
- **Time Boxing:** 5 minutes per major decision point
- **Documentation:** All decisions recorded with rationale

## Epic Retrospective Triggers

- **Automatic:** Triggered when epic progress reaches 100%
- **Manual Override:** SM can trigger early if needed
- **Prerequisites:** All stories must be "Done - Delivered" status
- **Dependencies:** Final story PR must be created

## Integration Points

- **Input from:** create-comprehensive-pr (100% completion auto-detected)
- **Output to:** Next epic planning and story-implementation workflow
- **Handoff:** "SM-led epic retrospective complete using auto-calculated metrics and story references. Strategic insights documented. Next epic preparation initiated with evidence-based patterns."

## LLM Optimization Notes

- Auto-calculated metrics eliminate manual tracking overhead
- Story reference approach prevents documentation duplication
- Evidence-based analysis reduces subjective interpretation
- Value-focused patterns drive actionable insights
- Concise format maintains strategic focus
- Token-efficient approach provides essential insights without overwhelming detail

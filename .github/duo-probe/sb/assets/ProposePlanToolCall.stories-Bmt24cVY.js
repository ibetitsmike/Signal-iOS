import{j as i,cF as w,S as e}from"./iframe-DS5VyXLs.js";import{a as f,A as a}from"./meta-BWzge-eA.js";import{s as l}from"./chatSetup-DJI_9Mbv.js";import{a as p,c}from"./messages-CnWrfKdU.js";import{f as d}from"./tools-Bd0lcXw4.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";import"./git-Ekgdg9se.js";const{waitFor:y,within:S}=__STORYBOOK_MODULE_TEST__,ee={...f,title:"App/Chat/Tools/ProposePlan"},v=1600,A={viewports:["desktop"]},t={render:()=>i.jsx(a,{setup:()=>l({workspaceId:"ws-plan",messages:[p("msg-1","Help me refactor the authentication module",{historySequence:1,timestamp:e-3e5}),c("msg-2","I'll create a plan for refactoring the authentication module.",{historySequence:2,timestamp:e-29e4,toolCalls:[d("call-plan-1",`# Authentication Module Refactor

## Overview

Refactor the authentication system to improve security and maintainability.

## Tasks

1. **Extract JWT utilities** - Move token generation and validation to dedicated module
2. **Add refresh token support** - Implement secure refresh token rotation
3. **Improve password hashing** - Upgrade to Argon2id with proper salt rounds
4. **Add rate limiting** - Implement per-IP and per-user rate limits
5. **Session management** - Add Redis-backed session store

## Implementation Order

\`\`\`mermaid
graph TD
    A[Extract JWT utils] --> B[Add refresh tokens]
    B --> C[Improve hashing]
    C --> D[Add rate limiting]
    D --> E[Session management]
\`\`\`

## Success Criteria

- All existing tests pass
- New tests for refresh token flow
- Security audit passes
- Performance benchmarks maintained`)]})]})}),parameters:{docs:{description:{story:"Shows the ProposePlanToolCall component with a completed plan. The plan card displays with the title in the header and icon action buttons (Copy, Start Here, Show Text) at the bottom, matching the AssistantMessage aesthetic."}}}},n={render:()=>i.jsx(a,{setup:()=>l({workspaceId:"ws-plan-mode",agentId:"plan",messages:[p("msg-1","Help me refactor the authentication module",{historySequence:1,timestamp:e-3e5}),c("msg-2","I'll create a plan for refactoring the authentication module.",{historySequence:2,timestamp:e-29e4,toolCalls:[d("call-plan-1",`# Authentication Module Refactor

## Overview

Refactor the authentication system to improve security and maintainability.

## Tasks

1. **Extract JWT utilities** - Move token generation and validation to dedicated module
2. **Add refresh token support** - Implement secure refresh token rotation
3. **Improve password hashing** - Upgrade to Argon2id with proper salt rounds
4. **Add rate limiting** - Implement per-IP and per-user rate limits
5. **Session management** - Add Redis-backed session store

## Implementation Order

\`\`\`mermaid
graph TD
    A[Extract JWT utils] --> B[Add refresh tokens]
    B --> C[Improve hashing]
    C --> D[Add rate limiting]
    D --> E[Session management]
\`\`\`

## Success Criteria

- All existing tests pass
- New tests for refresh token flow
- Security audit passes
- Performance benchmarks maintained`)]})]})}),parameters:{docs:{description:{story:'Same as ProposePlan but with agent mode set to "plan". Shows the Implement button instead of Continue in Auto.'}}}},o={...t,parameters:{...t.parameters,viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Renders ProposePlan at an iPhone-sized viewport to verify that Implement / Continue in Auto appear as shortcut icons in the left action row (preventing right-side overflow on small screens)."}}}},r={render:()=>i.jsx(a,{setup:()=>l({workspaceId:"ws-plan-toc",messages:[p("msg-1","Plan a multi-section refactor with deep structure.",{historySequence:1,timestamp:e-3e5}),c("msg-2","Here is the plan with a navigable outline:",{historySequence:2,timestamp:e-29e4,toolCalls:[d("call-plan-toc",`# Authentication Module Refactor

## Overview

Refactor the auth system to improve security, maintainability, and observability.

## Tasks

### Extract JWT utilities

Move token generation and validation to a dedicated module.

### Add refresh token support

Implement secure refresh token rotation.

### Improve password hashing

Upgrade to Argon2id with proper salt rounds.

### Add rate limiting

Implement per-IP and per-user rate limits.

## Implementation Order

\`\`\`mermaid
graph TD
    A[Extract JWT utils] --> B[Add refresh tokens]
    B --> C[Improve hashing]
    C --> D[Add rate limiting]
\`\`\`

## Rollout

### Staging soak

Two-week staging soak with synthetic traffic.

### Production cutover

Blue/green cutover with automatic rollback on auth-error spikes.

## Success Criteria

- All existing tests pass
- New tests for refresh token flow
- Security audit passes
- Performance benchmarks maintained`)]})]})}),globals:{viewport:{value:"wide",isRotated:!1}},play:async({canvasElement:h})=>{if(!(w()||window.innerWidth>=v))return;const m=await S(h).findByTestId("plan-toc-nav");await y(()=>{if(window.getComputedStyle(m).display==="none"||m.getClientRects().length===0){const u=document.querySelector('[style*="container"], .plan-toc-aware')?[...document.querySelectorAll("*")].find(g=>getComputedStyle(g).containerName.includes("transcript")):void 0;throw new Error(`Expected the full plan TOC to be visible in the wide Storybook story (innerWidth=${window.innerWidth}, innerHeight=${window.innerHeight}, transcriptContainerWidth=${u?.offsetWidth??"not-found"})`)}},{timeout:1e4})},parameters:{viewport:{defaultViewport:"wide"},pixel:{matrix:A},docs:{description:{story:'Wide-viewport rendering of a multi-section plan. The sticky "Contents" navigation appears in the left gutter beside the plan card, anchored to the plan\'s vertical bounds via `position: sticky` inside an absolutely-positioned `<aside>`. Visibility is purely CSS-driven (container query + visibility class) so toggling the plan tool expanded/collapsed produces no layout jank.'}}}},s={render:()=>i.jsx(a,{setup:()=>l({workspaceId:"ws-plan-overflow",messages:[p("msg-1","The CI is failing with this error, can you help?",{historySequence:1,timestamp:e}),c("msg-2","I see the issue. Here's my plan to fix it:",{historySequence:2,timestamp:e,toolCalls:[d("call-plan-1",`# Fix CI Pipeline Failure

## Problem

The deployment step is failing due to a configuration mismatch:

\`\`\`json
{"error":"ConfigurationError","message":"Environment variable AWS_REGION is required but not set","stack":"at validateConfig (deploy.js:42)","context":{"requiredVars":["AWS_REGION","AWS_ACCESS_KEY_ID","AWS_SECRET_ACCESS_KEY"],"missingVars":["AWS_REGION"]}}
\`\`\`

## Solution

1. Add the missing \`AWS_REGION\` environment variable to the CI configuration
2. Update the deployment script to provide better error messages
3. Add a pre-flight check to catch missing variables earlier`)]})]})}),parameters:{docs:{description:{story:"Tests that code blocks within plans wrap correctly instead of overflowing. The long JSON error line should wrap within the plan card."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-plan",
    messages: [createUserMessage("msg-1", "Help me refactor the authentication module", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 300000
    }), createAssistantMessage("msg-2", "I'll create a plan for refactoring the authentication module.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 290000,
      toolCalls: [createProposePlanTool("call-plan-1", \`# Authentication Module Refactor

## Overview

Refactor the authentication system to improve security and maintainability.

## Tasks

1. **Extract JWT utilities** - Move token generation and validation to dedicated module
2. **Add refresh token support** - Implement secure refresh token rotation
3. **Improve password hashing** - Upgrade to Argon2id with proper salt rounds
4. **Add rate limiting** - Implement per-IP and per-user rate limits
5. **Session management** - Add Redis-backed session store

## Implementation Order

\\\`\\\`\\\`mermaid
graph TD
    A[Extract JWT utils] --> B[Add refresh tokens]
    B --> C[Improve hashing]
    C --> D[Add rate limiting]
    D --> E[Session management]
\\\`\\\`\\\`

## Success Criteria

- All existing tests pass
- New tests for refresh token flow
- Security audit passes
- Performance benchmarks maintained\`)]
    })]
  })} />,
  parameters: {
    docs: {
      description: {
        story: "Shows the ProposePlanToolCall component with a completed plan. " + "The plan card displays with the title in the header and icon action buttons " + "(Copy, Start Here, Show Text) at the bottom, matching the AssistantMessage aesthetic."
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:`Story showing a propose_plan tool call with Plan UI.
Tests the plan card rendering with icon action buttons at the bottom.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    return setupSimpleChatStory({
      workspaceId: "ws-plan-mode",
      agentId: "plan",
      messages: [createUserMessage("msg-1", "Help me refactor the authentication module", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 300000
      }), createAssistantMessage("msg-2", "I'll create a plan for refactoring the authentication module.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 290000,
        toolCalls: [createProposePlanTool("call-plan-1", \`# Authentication Module Refactor

## Overview

Refactor the authentication system to improve security and maintainability.

## Tasks

1. **Extract JWT utilities** - Move token generation and validation to dedicated module
2. **Add refresh token support** - Implement secure refresh token rotation
3. **Improve password hashing** - Upgrade to Argon2id with proper salt rounds
4. **Add rate limiting** - Implement per-IP and per-user rate limits
5. **Session management** - Add Redis-backed session store

## Implementation Order

\\\`\\\`\\\`mermaid
graph TD
    A[Extract JWT utils] --> B[Add refresh tokens]
    B --> C[Improve hashing]
    C --> D[Add rate limiting]
    D --> E[Session management]
\\\`\\\`\\\`

## Success Criteria

- All existing tests pass
- New tests for refresh token flow
- Security audit passes
- Performance benchmarks maintained\`)]
      })]
    });
  }} />,
  parameters: {
    docs: {
      description: {
        story: 'Same as ProposePlan but with agent mode set to "plan". ' + "Shows the Implement button instead of Continue in Auto."
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:`Same as ProposePlan but with agent mode set to "plan".
Shows the Implement button (no Continue in Auto).`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...ProposePlan,
  parameters: {
    ...ProposePlan.parameters,
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "Renders ProposePlan at an iPhone-sized viewport to verify that Implement / Continue in Auto " + "appear as shortcut icons in the left action row (preventing right-side overflow on small screens)."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Mobile viewport version of ProposePlan.

Verifies that on narrow screens the primary plan actions (Implement / Continue in Auto)
render as shortcut icons in the left action row (instead of right-aligned buttons).`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-plan-toc",
    messages: [createUserMessage("msg-1", "Plan a multi-section refactor with deep structure.", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 300000
    }), createAssistantMessage("msg-2", "Here is the plan with a navigable outline:", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 290000,
      toolCalls: [createProposePlanTool("call-plan-toc", \`# Authentication Module Refactor

## Overview

Refactor the auth system to improve security, maintainability, and observability.

## Tasks

### Extract JWT utilities

Move token generation and validation to a dedicated module.

### Add refresh token support

Implement secure refresh token rotation.

### Improve password hashing

Upgrade to Argon2id with proper salt rounds.

### Add rate limiting

Implement per-IP and per-user rate limits.

## Implementation Order

\\\`\\\`\\\`mermaid
graph TD
    A[Extract JWT utils] --> B[Add refresh tokens]
    B --> C[Improve hashing]
    C --> D[Add rate limiting]
\\\`\\\`\\\`

## Rollout

### Staging soak

Two-week staging soak with synthetic traffic.

### Production cutover

Blue/green cutover with automatic rollback on auth-error spikes.

## Success Criteria

- All existing tests pass
- New tests for refresh token flow
- Security audit passes
- Performance benchmarks maintained\`)]
    })]
  })} />,
  globals: {
    viewport: {
      value: "wide",
      isRotated: false
    }
  },
  play: async ({
    canvasElement
  }) => {
    const shouldAssertFullToc = isPixel() || window.innerWidth >= PLAN_TOC_MIN_WIDTH;
    if (!shouldAssertFullToc) {
      return;
    }
    const canvas = within(canvasElement);
    const toc = await canvas.findByTestId("plan-toc-nav");
    // Explicit timeout, above preview.tsx's 5 s default: the container query can settle late on
    // loaded CI runners.
    await waitFor(() => {
      // Fail if the pinned viewport no longer reveals the full sticky ToC.
      if (window.getComputedStyle(toc).display === "none" || toc.getClientRects().length === 0) {
        // The reveal is a pure CSS container query, so include the widths that
        // drive it: a failure here is a sizing regression, not a timing race.
        const transcript = document.querySelector('[style*="container"], .plan-toc-aware') ? [...document.querySelectorAll<HTMLElement>("*")].find(el => getComputedStyle(el).containerName.includes("transcript")) : undefined;
        throw new Error("Expected the full plan TOC to be visible in the wide Storybook story " + \`(innerWidth=\${window.innerWidth}, innerHeight=\${window.innerHeight}, \` + \`transcriptContainerWidth=\${transcript?.offsetWidth ?? "not-found"})\`);
      }
    }, {
      timeout: 10_000
    });
  },
  parameters: {
    viewport: {
      defaultViewport: "wide"
    },
    pixel: {
      matrix: PLAN_TOC_PIXEL_MATRIX
    },
    docs: {
      description: {
        story: "Wide-viewport rendering of a multi-section plan. The sticky " + '"Contents" navigation appears in the left gutter beside the plan ' + "card, anchored to the plan's vertical bounds via \`position: sticky\` " + "inside an absolutely-positioned \`<aside>\`. " + "Visibility is purely CSS-driven (container query + visibility class) " + "so toggling the plan tool expanded/collapsed produces no layout jank."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Wide-viewport story that exercises the sticky plan TOC.\n\nThe TOC lives in an absolutely-positioned `<aside>` outside the centered\n`max-w-chat` transcript column, and is gated by a container query on the\ntranscript scrollport. At desktop (1280px) viewport the gate stays closed;\nthe `wide` viewport (1600px) gives the scrollport enough room to reveal\nthe TOC alongside the plan.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-plan-overflow",
    messages: [createUserMessage("msg-1", "The CI is failing with this error, can you help?", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP
    }), createAssistantMessage("msg-2", "I see the issue. Here's my plan to fix it:", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP,
      toolCalls: [createProposePlanTool("call-plan-1", \`# Fix CI Pipeline Failure

## Problem

The deployment step is failing due to a configuration mismatch:

\\\`\\\`\\\`json
{"error":"ConfigurationError","message":"Environment variable AWS_REGION is required but not set","stack":"at validateConfig (deploy.js:42)","context":{"requiredVars":["AWS_REGION","AWS_ACCESS_KEY_ID","AWS_SECRET_ACCESS_KEY"],"missingVars":["AWS_REGION"]}}
\\\`\\\`\\\`

## Solution

1. Add the missing \\\`AWS_REGION\\\` environment variable to the CI configuration
2. Update the deployment script to provide better error messages
3. Add a pre-flight check to catch missing variables earlier\`)]
    })]
  })} />,
  parameters: {
    docs: {
      description: {
        story: "Tests that code blocks within plans wrap correctly instead of overflowing. " + "The long JSON error line should wrap within the plan card."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Story showing a propose_plan with a code block containing long horizontal content.
Tests that code blocks wrap correctly instead of overflowing the container.`,...s.parameters?.docs?.description}}};const te=["ProposePlan","ProposePlanInPlanMode","ProposePlanMobile","ProposePlanWithTableOfContents","ProposePlanWithLongCodeBlock"];export{t as ProposePlan,n as ProposePlanInPlanMode,o as ProposePlanMobile,s as ProposePlanWithLongCodeBlock,r as ProposePlanWithTableOfContents,te as __namedExportsOrder,ee as default};

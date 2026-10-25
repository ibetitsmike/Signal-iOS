import{j as i,c as h,S as e}from"./iframe-C48Cgo5e.js";import{a as A,b as _,A as n}from"./meta-BMDQogfB.js";import{s as g}from"./chatSetup--9T4hSMU.js";import{a as r,c as s}from"./messages-Bf7rPDB1.js";import{f as M,d as E,e as w,a as k,l as u,h as v,g as y,m as T}from"./tools-Bd0lcXw4.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{userEvent:b,waitFor:m}=__STORYBOOK_MODULE_TEST__,ie={...A,title:"App/Chat/Transcript Density"};function f(t){return h(),g({userPreferences:{appearance:{transcriptDensity:t}},messages:[r("density-user-1","Audit the auth module and make the smallest safe fix",{historySequence:1,timestamp:e-6e4}),s("density-assistant-1","I'll gather context first.",{historySequence:2,timestamp:e-55e3,partial:!0,reasoning:"Need to inspect auth code, search related validation guidance, and then make a minimal patch.",toolCalls:[w("density-read-1","src/auth.ts","export function verify() {}"),E("density-search-1","JWT validation best practices",3),k("density-skill-1","react-effects",{scope:"global"}),u("density-question-1","ask_user_question",{question:"Any additional validation needed?"},{answer:"Please validate with typecheck too"})]}),r("density-user-2","Please validate with typecheck too",{historySequence:3,timestamp:e-4e4}),s("density-assistant-2","I found the relevant code and will patch it.",{historySequence:4,timestamp:e-35e3,toolCalls:[v("density-edit-1","src/auth.ts",["--- src/auth.ts","+++ src/auth.ts","@@ -1,3 +1,4 @@","+import { timingSafeEqual } from 'crypto';"," export function verify() {}"].join(`
`)),y("density-test-1","make test","42 tests passed",0,30,500,"Running tests"),y("density-fail-1","make typecheck","Type error in src/auth.ts",1,30,500,"Failing validation"),{type:"text",text:"Implemented the auth audit fix and validated it.",timestamp:e-15e3}]})]})}function x(t,a){const S=t.querySelector(`[data-testid="${a}"]`);if(!(S instanceof HTMLElement))throw new Error(`Expected ${a} to be rendered`);return S}const o={render:()=>i.jsx(n,{setup:()=>f("normal")})},l={parameters:{pixel:{matrix:_}},render:()=>i.jsx(n,{setup:()=>f("hyper")})},c={render:()=>i.jsx(n,{setup:()=>(h(),g({userPreferences:{appearance:{transcriptDensity:"hyper"}},messages:[r("tail-plan-user-1","Plan the transcript density fix",{historySequence:1,timestamp:e-2e4}),s("tail-plan-assistant-1","I'll draft the implementation plan.",{historySequence:2,timestamp:e-15e3,toolCalls:[M("tail-plan-tool-1",["# Tail Plan","","## Acceptance","","- The tail propose_plan is visible in hyper density without expanding bundles."].join(`
`)),{type:"text",text:"Plan ready for review.",timestamp:e-5e3}]})]}))})},p={tags:["!test"],render:()=>i.jsx(n,{setup:()=>f("hyper")}),play:async({canvasElement:t})=>{const a=await m(()=>x(t,"work-bundle"),{timeout:15e3});await b.click(a),await m(()=>{if(a.getAttribute("aria-expanded")!=="true")throw new Error("Expected HyperExpandedBundle work bundle to be expanded")},{timeout:15e3}),await m(()=>x(t,"operational-bundle"),{timeout:15e3}),a.blur()}},d={render:()=>i.jsx(n,{setup:()=>{h();const t=Date.now()-39e3;return g({userPreferences:{appearance:{transcriptDensity:"hyper"}},messages:[r("gallery-critical-user","Make the change and validate it",{historySequence:1,timestamp:e-6e4}),s("gallery-critical-assistant","I'll inspect, edit, and validate.",{historySequence:2,timestamp:e-55e3,toolCalls:[w("gallery-critical-read","src/config.ts","export const enabled = false;"),v("gallery-critical-edit","src/config.ts",`--- src/config.ts
+++ src/config.ts
@@ -1 +1 @@
-export const enabled = false;
+export const enabled = true;`),y("gallery-critical-validation","make typecheck","Type error in src/config.ts",1),u("gallery-critical-question","ask_user_question",{question:"Proceed?"},{answer:"Yes"}),u("gallery-critical-notify","notify",{title:"Validation failed"},{success:!0})]}),r("gallery-miss-user","Look for a deprecated helper",{historySequence:3,timestamp:e-4e4}),s("gallery-miss-assistant","I'll search for that helper.",{historySequence:4,timestamp:e-35e3,toolCalls:[E("gallery-miss-search","deprecatedMuxHelper",0)]}),r("gallery-active-user","Inspect the repository",{historySequence:5,timestamp:t-5e3}),s("gallery-active-assistant","I'll read the key files now.",{historySequence:6,timestamp:t,toolCalls:[T("gallery-active-read","file_read",{path:"src/App.tsx"}),T("gallery-active-search","web_search",{query:"Xum transcript density"})]})]})}})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupTranscriptDensityStory("normal")} />
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => setupTranscriptDensityStory("hyper")} />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    return setupSimpleChatStory({
      userPreferences: {
        appearance: {
          transcriptDensity: "hyper"
        }
      },
      messages: [createUserMessage("tail-plan-user-1", "Plan the transcript density fix", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 20_000
      }), createAssistantMessage("tail-plan-assistant-1", "I'll draft the implementation plan.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 15_000,
        toolCalls: [createProposePlanTool("tail-plan-tool-1", ["# Tail Plan", "", "## Acceptance", "", "- The tail propose_plan is visible in hyper density without expanding bundles."].join("\\n")), {
          type: "text",
          text: "Plan ready for review.",
          timestamp: STABLE_TIMESTAMP - 5_000
        }]
      })]
    });
  }} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  // Pixel executes this play function for the visual snapshot, while the
  // app-level UI test covers expansion behavior without Storybook's manager-page timing.
  tags: ["!test"],
  render: () => <AppWithMocks setup={() => setupTranscriptDensityStory("hyper")} />,
  play: async ({
    canvasElement
  }) => {
    const workBundle = await waitFor(() => getRequiredStoryElement(canvasElement, "work-bundle"), {
      timeout: 15_000
    });
    await userEvent.click(workBundle);
    await waitFor(() => {
      if (workBundle.getAttribute("aria-expanded") !== "true") {
        throw new Error("Expected HyperExpandedBundle work bundle to be expanded");
      }
    }, {
      timeout: 15_000
    });
    await waitFor(() => getRequiredStoryElement(canvasElement, "operational-bundle"), {
      timeout: 15_000
    });
    // Density snapshot, not a focus one: headless Chromium treats scripted focus as :focus-visible.
    workBundle.blur();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    collapseLeftSidebar();
    const activeStartedAt = Date.now() - 39_000;
    return setupSimpleChatStory({
      userPreferences: {
        appearance: {
          transcriptDensity: "hyper"
        }
      },
      messages: [
      // Scenario 1: critical events remain visible in hyper density.
      createUserMessage("gallery-critical-user", "Make the change and validate it", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 60_000
      }), createAssistantMessage("gallery-critical-assistant", "I'll inspect, edit, and validate.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 55_000,
        toolCalls: [createFileReadTool("gallery-critical-read", "src/config.ts", "export const enabled = false;"), createFileEditTool("gallery-critical-edit", "src/config.ts", "--- src/config.ts\\n+++ src/config.ts\\n@@ -1 +1 @@\\n-export const enabled = false;\\n+export const enabled = true;"), createBashTool("gallery-critical-validation", "make typecheck", "Type error in src/config.ts", 1), createGenericTool("gallery-critical-question", "ask_user_question", {
          question: "Proceed?"
        }, {
          answer: "Yes"
        }), createGenericTool("gallery-critical-notify", "notify", {
          title: "Validation failed"
        }, {
          success: true
        })]
      }),
      // Scenario 2: an all-miss search bundle (zero results).
      createUserMessage("gallery-miss-user", "Look for a deprecated helper", {
        historySequence: 3,
        timestamp: STABLE_TIMESTAMP - 40_000
      }), createAssistantMessage("gallery-miss-assistant", "I'll search for that helper.", {
        historySequence: 4,
        timestamp: STABLE_TIMESTAMP - 35_000,
        toolCalls: [createWebSearchTool("gallery-miss-search", "deprecatedMuxHelper", 0)]
      }),
      // Scenario 3 (tail): active/pending tools so the elapsed-time UI renders.
      createUserMessage("gallery-active-user", "Inspect the repository", {
        historySequence: 5,
        timestamp: activeStartedAt - 5_000
      }), createAssistantMessage("gallery-active-assistant", "I'll read the key files now.", {
        historySequence: 6,
        timestamp: activeStartedAt,
        toolCalls: [createPendingTool("gallery-active-read", "file_read", {
          path: "src/App.tsx"
        }), createPendingTool("gallery-active-search", "web_search", {
          query: "Xum transcript density"
        })]
      })]
    });
  }} />
}`,...d.parameters?.docs?.source}}};const ne=["NormalNoisyTranscript","HyperCollapsedBundles","HyperTailProposePlanExpanded","HyperExpandedBundle","HyperEdgeCaseGallery"];export{l as HyperCollapsedBundles,d as HyperEdgeCaseGallery,p as HyperExpandedBundle,c as HyperTailProposePlanExpanded,o as NormalNoisyTranscript,ne as __namedExportsOrder,ie as default};

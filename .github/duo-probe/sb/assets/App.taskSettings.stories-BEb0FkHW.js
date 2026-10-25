import{j as g,f as w}from"./iframe-DS5VyXLs.js";import{a as h,A as x}from"./meta-BWzge-eA.js";import{d as v}from"./storyPlayHelpers-_VqAI56j.js";import{s as f}from"./settingsStoryUtils-CybYsmtV.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";const{expect:e,userEvent:a,within:l}=__STORYBOOK_MODULE_TEST__,J={...h,title:"App/TaskSettings"};function k(){return w(),f({agentAiDefaults:{exec:{modelString:"openai:gpt-6.1-sol",thinkingLevel:"high",reasoningMode:"pro"}},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}})}async function d(i){const m=l(await v(i));await a.click(await m.findByRole("button",{name:"Agents"}));const o=await m.findByRole("group",{name:"Exec defaults"}),n=l(o),p=n.getByRole("button",{name:"Reasoning"});await a.click(p);const t=n.getByRole("button",{name:/Pro mode/});await e(t).toHaveAttribute("aria-pressed","mixed"),await e(n.queryByRole("button",{name:/Fast mode/})).toBeNull();const c=l(n.getByRole("listbox",{name:"Reasoning effort"}));if(await a.click(c.getByRole("option",{name:"Max"})),await e(t).toHaveAttribute("aria-pressed","mixed"),await e(p).toHaveTextContent("Max"),await a.click(t),await e(t).toHaveAttribute("aria-pressed","true"),await a.click(t),await e(t).toHaveAttribute("aria-pressed","false"),await e(p).toHaveTextContent("STANDARD"),await a.click(c.getByRole("option",{name:"Use calling chat’s Exec"})),await e(t).toHaveAttribute("aria-pressed","mixed"),o.scrollIntoView({block:"start"}),window.innerWidth<768){const u=n.getByRole("listbox",{name:"Reasoning effort"});await e(o.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await e(u.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await e(o.scrollWidth).toBeLessThanOrEqual(o.clientWidth)}}const r={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},render:()=>g.jsx(x,{setup:k}),play:async({canvasElement:i})=>d(i)},s={...r,globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:i})=>d(i)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["desktop"]
      }
    }
  },
  render: () => <AppWithMocks setup={setupTaskSettings} />,
  play: async ({
    canvasElement
  }) => exerciseInheritance(canvasElement)
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => exerciseInheritance(canvasElement)
}`,...s.parameters?.docs?.source}}};const Q=["Desktop","Phone"];export{r as Desktop,s as Phone,Q as __namedExportsOrder,J as default};

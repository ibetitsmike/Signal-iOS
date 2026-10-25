import{j as g,f as w}from"./iframe-C48Cgo5e.js";import{a as h,A as x}from"./meta-BMDQogfB.js";import{d as v}from"./storyPlayHelpers-_VqAI56j.js";import{s as f}from"./settingsStoryUtils-8EkykBwa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";const{expect:e,userEvent:a,within:l}=__STORYBOOK_MODULE_TEST__,J={...h,title:"App/TaskSettings"};function k(){return w(),f({agentAiDefaults:{exec:{modelString:"openai:gpt-6.1-sol",thinkingLevel:"high",reasoningMode:"pro"}},providersConfig:{openai:{apiKeySet:!0,isEnabled:!0,isConfigured:!0}}})}async function d(i){const m=l(await v(i));await a.click(await m.findByRole("button",{name:"Agents"}));const o=await m.findByRole("group",{name:"Exec defaults"}),n=l(o),p=n.getByRole("button",{name:"Reasoning"});await a.click(p);const t=n.getByRole("button",{name:/Pro mode/});await e(t).toHaveAttribute("aria-pressed","mixed"),await e(n.queryByRole("button",{name:/Fast mode/})).toBeNull();const c=l(n.getByRole("listbox",{name:"Reasoning effort"}));if(await a.click(c.getByRole("option",{name:"Max"})),await e(t).toHaveAttribute("aria-pressed","mixed"),await e(p).toHaveTextContent("Max"),await a.click(t),await e(t).toHaveAttribute("aria-pressed","true"),await a.click(t),await e(t).toHaveAttribute("aria-pressed","false"),await e(p).toHaveTextContent("STANDARD"),await a.click(c.getByRole("option",{name:"Use calling chat’s Exec"})),await e(t).toHaveAttribute("aria-pressed","mixed"),o.scrollIntoView({block:"start"}),window.innerWidth<768){const u=n.getByRole("listbox",{name:"Reasoning effort"});await e(o.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await e(u.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await e(o.scrollWidth).toBeLessThanOrEqual(o.clientWidth)}}const r={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},render:()=>g.jsx(x,{setup:k}),play:async({canvasElement:i})=>d(i)},s={...r,globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:i})=>d(i)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

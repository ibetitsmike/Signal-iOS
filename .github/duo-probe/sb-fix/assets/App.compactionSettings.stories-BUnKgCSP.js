import{j as f,f as k,E as i,w as C,h as T}from"./iframe-DwmVy7SQ.js";import{a as E,A as x}from"./meta-CT6GdK4g.js";import{g as R,d as O}from"./storyPlayHelpers-_VqAI56j.js";import{s as A}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";const{expect:a,fn:_,userEvent:p,waitFor:l,within:c}=__STORYBOOK_MODULE_TEST__,st={...E,title:"App/CompactionSettings"},o=_();function h(e="legacy"){k();const t=A({experiments:{...e==="defaults"?{}:{[i.CONTINUOUS_COMPACTION]:e==="legacy",[i.TOKEN_BUDGET]:!0},[i.MEMORY]:!0,[i.PROGRAMMATIC_TOOL_CALLING]:e==="conflict",[i.RLM]:e==="conflict"}});return o.mockReset(),o.mockImplementation(t.experiments.set),t.experiments={set:o,onDesignChange:()=>Promise.resolve(C((async function*(){yield await Promise.resolve({enabled:!1,revision:0})})(),{})),onPerfFlightRecorderChange:()=>Promise.resolve(C((async function*(){yield await Promise.resolve({enabled:!1,state:"off"})})(),{}))},t}async function v(e){const n=await c(await O(e)).findByRole("combobox",{name:"Compaction strategy"});return n.scrollIntoView({block:"center"}),n}async function r(e,t){await l(async()=>{const n=T().getSnapshot()?.experiments;await a(n?.[i.CONTINUOUS_COMPACTION]===!0).toBe(e),await a(n?.[i.TOKEN_BUDGET]===!0).toBe(t)})}async function y(e,t){await l(async()=>a(o).toHaveBeenCalledTimes(2)),await a(o).toHaveBeenCalledWith({experimentId:i.CONTINUOUS_COMPACTION,enabled:e}),await a(o).toHaveBeenCalledWith({experimentId:i.TOKEN_BUDGET,enabled:t})}async function S(e){await p.click(e),await p.keyboard("{Escape}"),await a(e).toHaveAttribute("aria-expanded","false"),await a(o).not.toHaveBeenCalled()}async function u(e,t){o.mockClear(),await p.click(e);const n=c(e.ownerDocument.body);await p.click(await n.findByRole("option",{name:t})),await l(()=>a(e).toHaveTextContent(t))}async function B(e){const t=await v(e);await l(()=>a(t).toHaveTextContent("Continuous")),await r(!0,!0),await S(t),await u(t,"Continuous"),await r(!0,!1),await y(!0,!1),await u(t,"Token Budget"),await r(!1,!0),await y(!1,!0),await u(t,"Summarize"),await r(!1,!1),await y(!1,!1),await p.click(t);const s=await c(t.ownerDocument.body).findByRole("listbox");await a(c(s).getAllByRole("option")).toHaveLength(3);for(const b of["Summarize","Continuous","Token Budget"])await a(c(s).getByRole("option",{name:b})).toBeVisible();window.innerWidth<768&&(await a(t.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await a(s.getBoundingClientRect().left).toBeGreaterThanOrEqual(0),await a(s.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await a(document.documentElement.scrollWidth).toBeLessThanOrEqual(window.innerWidth))}const m={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},render:()=>f.jsx(x,{setup:()=>h()}),play:async({canvasElement:e})=>B(e)},w={...m,globals:{viewport:{value:"phone",isRotated:!1}},parameters:{viewport:{options:{phone:{name:"Phone",styles:{width:"390px",height:"844px"},type:"mobile"}}},pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>B(e)},d={render:()=>f.jsx(x,{setup:()=>h("defaults")}),play:async({canvasElement:e})=>{const t=await v(e);await a(t).toHaveTextContent("Summarize"),await r(!1,!1),await S(t),await p.click(t),c(t.ownerDocument.body).getByRole("option",{name:"Summarize"}).focus(),await p.keyboard("{Enter}"),await a(t).toHaveAttribute("aria-expanded","false"),await r(!1,!1),await y(!1,!1)}},g={render:()=>f.jsx(x,{setup:()=>h("conflict")}),play:async({canvasElement:e})=>{const t=await v(e),n=c(R());await l(()=>a(t).toHaveTextContent("Token Budget"));const s=n.getByRole("status");await a(s).toBeVisible(),await a(t).toHaveAttribute("aria-describedby",s.id),await u(t,"Continuous"),await l(()=>a(n.queryByRole("status")).toBeNull()),await u(t,"Token Budget"),await r(!1,!0),await a(await n.findByRole("status")).toBeVisible()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  render: () => <AppWithMocks setup={() => setupCompactionSettings()} />,
  play: async ({
    canvasElement
  }) => exerciseCompactionSettings(canvasElement)
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  globals: {
    viewport: {
      value: "phone",
      isRotated: false
    }
  },
  parameters: {
    viewport: {
      options: {
        phone: {
          name: "Phone",
          styles: {
            width: "390px",
            height: "844px"
          },
          type: "mobile"
        }
      }
    },
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => exerciseCompactionSettings(canvasElement)
}`,...w.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupCompactionSettings("defaults")} />,
  play: async ({
    canvasElement
  }) => {
    const trigger = await openCompactionSettings(canvasElement);
    await expect(trigger).toHaveTextContent("Summarize");
    await expectPersistedStrategy(false, false);
    await dismissWithoutChoosing(trigger);
    // Keyboard activation must commit the current default just like a pointer selection.
    await userEvent.click(trigger);
    const option = within(trigger.ownerDocument.body).getByRole("option", {
      name: "Summarize"
    });
    option.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expectPersistedStrategy(false, false);
    await expectStrategyWrites(false, false);
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupCompactionSettings("conflict")} />,
  play: async ({
    canvasElement
  }) => {
    const trigger = await openCompactionSettings(canvasElement);
    const canvas = within(getSettingsDialog());
    await waitFor(() => expect(trigger).toHaveTextContent("Token Budget"));
    const warning = canvas.getByRole("status");
    await expect(warning).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-describedby", warning.id);
    await selectStrategy(trigger, "Continuous");
    await waitFor(() => expect(canvas.queryByRole("status")).toBeNull());
    await selectStrategy(trigger, "Token Budget");
    await expectPersistedStrategy(false, true);
    await expect(await canvas.findByRole("status")).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}};const rt=["Desktop","Phone","ExplicitSummarize","TokenBudgetConflict"];export{m as Desktop,d as ExplicitSummarize,w as Phone,g as TokenBudgetConflict,rt as __namedExportsOrder,st as default};

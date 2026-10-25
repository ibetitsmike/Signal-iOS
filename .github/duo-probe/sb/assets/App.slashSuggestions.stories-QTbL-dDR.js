import{j as l,S as r}from"./iframe-DpCW2UOM.js";import{a as m,P as g,A as u}from"./meta-BwRgvoZ6.js";import{s as w}from"./chatSetup-48_rCYsC.js";import{a as h,c as y}from"./messages-BbMCeQNx.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";const{expect:t,userEvent:p,waitFor:d,within:a}=__STORYBOOK_MODULE_TEST__,K={...m,title:"App/SlashSuggestions"},e={parameters:{...m.parameters,pixel:g},render:()=>l.jsx(u,{setup:()=>w({workspaceId:"ws-slash-suggestions",workspaceName:"slash-suggestions",projectName:"xum",messages:[h("msg-1","Hello",{historySequence:1,timestamp:r-6e4}),y("msg-2","Hi.",{historySequence:2,timestamp:r-5e4})]})}),play:async({canvasElement:o})=>{const n=a(o),i=a(o.ownerDocument.body),s=await n.findByRole("textbox",{name:"Message"},{timeout:15e3});await p.click(s),await p.keyboard("/");const c=await i.findByRole("listbox",{name:"Slash command suggestions"});await t(a(c).getAllByRole("option").length).toBeGreaterThan(0),await d(async()=>{await t(i.queryByText(/Something went wrong/)).toBeNull(),await t(n.getByRole("textbox",{name:"Message"})).toBe(s)}),await t(s).toHaveValue("/")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-slash-suggestions",
    workspaceName: "slash-suggestions",
    projectName: "xum",
    messages: [createUserMessage("msg-1", "Hello", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60_000
    }), createAssistantMessage("msg-2", "Hi.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 50_000
    })]
  })} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const composer = await canvas.findByRole("textbox", {
      name: "Message"
    }, {
      timeout: 15_000
    });
    await userEvent.click(composer);
    await userEvent.keyboard("/");
    const list = await body.findByRole("listbox", {
      name: "Slash command suggestions"
    });
    await expect(within(list).getAllByRole("option").length).toBeGreaterThan(0);
    // The MCP prompt request settles after the list opens; the pane must survive it.
    await waitFor(async () => {
      await expect(body.queryByText(/Something went wrong/)).toBeNull();
      await expect(canvas.getByRole("textbox", {
        name: "Message"
      })).toBe(composer);
    });
    await expect(composer).toHaveValue("/");
  }
}`,...e.parameters?.docs?.source},description:{story:"Behavioral contract only, so Pixel snapshots are off.",...e.parameters?.docs?.description}}};const Y=["OpensWithoutCrashing"];export{e as OpensWithoutCrashing,Y as __namedExportsOrder,K as default};

import{j as l,S as r}from"./iframe-DwmVy7SQ.js";import{a as m,P as g,A as u}from"./meta-CT6GdK4g.js";import{s as w}from"./chatSetup-D_GSrzyc.js";import{a as h,c as y}from"./messages-ajL82_FT.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";import"./git-Ekgdg9se.js";const{expect:t,userEvent:p,waitFor:d,within:a}=__STORYBOOK_MODULE_TEST__,K={...m,title:"App/SlashSuggestions"},e={parameters:{...m.parameters,pixel:g},render:()=>l.jsx(u,{setup:()=>w({workspaceId:"ws-slash-suggestions",workspaceName:"slash-suggestions",projectName:"xum",messages:[h("msg-1","Hello",{historySequence:1,timestamp:r-6e4}),y("msg-2","Hi.",{historySequence:2,timestamp:r-5e4})]})}),play:async({canvasElement:o})=>{const n=a(o),i=a(o.ownerDocument.body),s=await n.findByRole("textbox",{name:"Message"},{timeout:15e3});await p.click(s),await p.keyboard("/");const c=await i.findByRole("listbox",{name:"Slash command suggestions"});await t(a(c).getAllByRole("option").length).toBeGreaterThan(0),await d(async()=>{await t(i.queryByText(/Something went wrong/)).toBeNull(),await t(n.getByRole("textbox",{name:"Message"})).toBe(s)}),await t(s).toHaveValue("/")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

import{j as g,c as f,a as A,u as P,g as L,S as k}from"./iframe-DwmVy7SQ.js";import{a as h,P as R,A as w}from"./meta-CT6GdK4g.js";import{s as E}from"./chatSetup-D_GSrzyc.js";import{t as M}from"./contrast-Bnc7IxMq.js";import{P as _}from"./subagentReportStory-DKbhGIRH.js";import{c as C}from"./messages-ajL82_FT.js";import{c as q}from"./workspaces-DVCSHIwS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./orpc-sAt07-6s.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./git-Ekgdg9se.js";const{expect:t,userEvent:m,waitFor:O,within:c}=__STORYBOOK_MODULE_TEST__,W="ws-agent-communication",S="Preserving active-pointer crash recovery",H=`One final generation-guard audit caught an edge not covered by existing tests: startup’s authoritative newer-handle selection must be allowed to replace a stale **active** child pointer, not only terminal pointers.

I’m adding a compare-with-snapshotted previous execution ID permission only for startup reconciliation, plus a test for the old running status.`,d=`Focused follow-up before finalizing: verify the native canvas clipping behavior and the parent popup-blocked failure path.

Check handshake ordering in src/browser/features/Tools/SubagentTranscriptDialog.tsx and keep the change scoped to the existing behavior.`;function B(o=!1,e=!1){const a=`${W}-${o?"failed":e?"long":"sent"}`;return f(),A(),P(L(a),{}),E({workspaceId:a,workspaceName:"agent-communication",projectName:"mux",messages:[C("outgoing-updates","",{historySequence:1,timestamp:k,toolCalls:[{type:"dynamic-tool",toolCallId:"outgoing-report",toolName:"agent_report",state:"output-available",input:{title:S,reportMarkdown:H},output:o?{success:!1,error:"The parent workspace is unavailable."}:{success:!0}},{type:"dynamic-tool",toolCallId:"outgoing-message",toolName:"task_send_message",state:"output-available",input:{task_id:"b3947e259a",message:e?Array.from({length:200},(r,n)=>`Check ${n+1}: ${d}`).join(`

`):d},output:o?{status:"refused",taskId:"b3947e259a",reason:"This message is already queued."}:{status:"reactivated",taskId:"b3947e259a"}}]})],additionalWorkspaces:[q({id:"b3947e259a",name:"reviewer",title:"Reviewer",projectName:"mux",parentWorkspaceId:a,taskStatus:"running"})]})}const ve={...h,title:"App/AgentCommunication"},i={render:()=>g.jsx(w,{setup:B}),parameters:{...h.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},play:async({canvasElement:o})=>{const e=c(o),a=await e.findByRole("button",{name:"Message to Reviewer"});await t(a).toHaveAttribute("aria-expanded","false"),await m.click(a),await t(a).toHaveAttribute("aria-expanded","true"),a.focus(),await m.keyboard("{Enter}"),await t(a).toHaveAttribute("aria-expanded","false"),await m.keyboard(" "),await t(a).toHaveAttribute("aria-expanded","true");const r=await e.findAllByText(/^Sent/);await t(M(()=>r).join(`
`)).toBe(""),await new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(()=>n())))}},s={...i,globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[_],parameters:{...h.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async o=>{await i.play?.(o);const e=o.canvasElement.querySelectorAll('[data-component="AgentCommunicationCard"]');await t(e.length).toBe(2);for(const a of e)await t(a.clientWidth).toBeLessThan(390),await t(a.scrollWidth).toBeLessThanOrEqual(a.clientWidth)}};function I(){return f(),A(),E({workspaceId:"ws-compacted-agent-communication",workspaceName:"compacted-communication",projectName:"mux",messages:[C("compacted-updates","",{historySequence:1,timestamp:k,toolCalls:[{type:"dynamic-tool",toolCallId:"compacted-execution",toolName:"code_execution",state:"output-available",input:{code:"// Send agent updates"},output:{success:!0,duration_ms:2,consoleOutput:[],toolCalls:[{toolName:"agent_report",args:{title:S,reportMarkdown:H},ok:!0,bytes:32,duration_ms:1},{toolName:"task_send_message",args:{task_id:"b3947e259a",message:d},ok:!0,bytes:64,duration_ms:1}]}}]})]})}const l={render:()=>g.jsx(w,{setup:I}),parameters:i.parameters,play:async({canvasElement:o})=>{const e=c(o),a=await e.findByRole("button",{name:"Message to agent"});a.getAttribute("aria-expanded")!=="true"&&await m.click(a),await t(e.getByRole("region",{name:"Message content"})).toHaveTextContent(d.replace(/\s+/g," "));const r=o.querySelectorAll('[data-component="AgentCommunicationCard"]');await t(r).toHaveLength(2);for(const n of r){const T=c(n).getByRole("status");await t(T).not.toHaveClass("text-danger"),await t(T).not.toHaveClass("text-success-text"),await t(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth)}}},v={...l,globals:s.globals,decorators:s.decorators,parameters:s.parameters};function j(){return f(),A(),E({workspaceId:"ws-queued-agent-communication",workspaceName:"queued-communication",projectName:"mux",messages:[C("queued-messages","",{historySequence:1,timestamp:k,toolCalls:["tool-end","turn-end"].map(o=>({type:"dynamic-tool",toolCallId:`queued-${o}`,toolName:"task_send_message",state:"output-available",input:{task_id:"b3947e259a",message:d},output:{status:"queued",taskId:"b3947e259a",queueDispatchMode:o}}))})]})}const p={render:()=>g.jsx(w,{setup:j}),parameters:{...h.parameters,pixel:R},play:async({canvasElement:o})=>{await c(o).findByText("Queued until turn end");const a=o.querySelectorAll('[data-component="AgentCommunicationCard"]');await t(a).toHaveLength(2);for(const r of a){const n=c(r).getByRole("status");await t(n).not.toHaveClass("text-danger"),await t(n).not.toHaveClass("text-success-text"),await t(r.scrollWidth).toBeLessThanOrEqual(r.clientWidth)}}},x={...p,globals:s.globals,decorators:s.decorators},y={render:()=>g.jsx(w,{setup:()=>B(!0)}),parameters:{...h.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},play:async({canvasElement:o})=>{const e=c(o);await t(await e.findAllByRole("alert")).toHaveLength(2);const a=e.getByRole("button",{name:S});await m.click(a),await t(a).toHaveAttribute("aria-expanded","false"),await t(e.getAllByRole("alert")).toHaveLength(2)}},u={...i,render:()=>g.jsx(w,{setup:()=>B(!1,!0)}),play:async o=>{await i.play?.(o);const e=c(o.canvasElement).getByRole("region",{name:"Message content"});await t(e.scrollHeight).toBeGreaterThan(e.clientHeight),await t(e.clientHeight).toBeLessThanOrEqual(window.innerHeight*.4+1),e.focus(),await t(e).toHaveFocus(),e.scrollTo({top:e.scrollHeight}),await O(()=>t(e.scrollTop).toBeGreaterThan(0)),await t(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth)}},b={...u,globals:s.globals,decorators:s.decorators,parameters:s.parameters};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupCommunicationStory} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Message to Reviewer"
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    // Prove keyboard collapse/expand as well as pointer interaction.
    toggle.focus();
    await userEvent.keyboard("{Enter}");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard(" ");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    // "Sent" is success text on the message surface: 2.68:1 in light before #6882.
    const sent = await canvas.findAllByText(/^Sent/);
    await expect(textsBelowAaInThemes(() => sent).join("\\n")).toBe("");
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Outgoing,
  // Pin both the manager/Pixel viewport and the test-runner's otherwise desktop-width canvas.
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  decorators: [PhoneSubagentReportDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  play: async context => {
    await Outgoing.play?.(context);
    const cards = context.canvasElement.querySelectorAll('[data-component="AgentCommunicationCard"]');
    await expect(cards.length).toBe(2);
    for (const card of cards) {
      await expect(card.clientWidth).toBeLessThan(390);
      await expect(card.scrollWidth).toBeLessThanOrEqual(card.clientWidth);
    }
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupCompactedCommunicationStory} />,
  parameters: Outgoing.parameters,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Message to agent"
    });
    if (toggle.getAttribute("aria-expanded") !== "true") await userEvent.click(toggle);
    await expect(canvas.getByRole("region", {
      name: "Message content"
    })).toHaveTextContent(MESSAGE.replace(/\\s+/g, " "));
    const cards = canvasElement.querySelectorAll('[data-component="AgentCommunicationCard"]');
    await expect(cards).toHaveLength(2);
    for (const card of cards) {
      const status = within(card as HTMLElement).getByRole("status");
      await expect(status).not.toHaveClass("text-danger");
      await expect(status).not.toHaveClass("text-success-text");
      await expect(card.scrollWidth).toBeLessThanOrEqual(card.clientWidth);
    }
  }
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Compacted,
  globals: Phone.globals,
  decorators: Phone.decorators,
  parameters: Phone.parameters
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupQueuedCommunicationStory} />,
  // Play-only contract: the Pixel snapshot budget is full, and the label-only change is covered
  // by the unit test plus this layout check.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Queued until turn end");
    const cards = canvasElement.querySelectorAll('[data-component="AgentCommunicationCard"]');
    await expect(cards).toHaveLength(2);
    for (const card of cards) {
      // Queued is neither a failure nor a completed delivery.
      const status = within(card as HTMLElement).getByRole("status");
      await expect(status).not.toHaveClass("text-danger");
      await expect(status).not.toHaveClass("text-success-text");
      await expect(card.scrollWidth).toBeLessThanOrEqual(card.clientWidth);
    }
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Queued,
  globals: Phone.globals,
  decorators: Phone.decorators
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupCommunicationStory(true)} />,
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findAllByRole("alert")).toHaveLength(2);
    const toggle = canvas.getByRole("button", {
      name: REPORT_TITLE
    });
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.getAllByRole("alert")).toHaveLength(2);
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Outgoing,
  render: () => <AppWithMocks setup={() => setupCommunicationStory(false, true)} />,
  play: async context => {
    await Outgoing.play?.(context);
    const content = within(context.canvasElement).getByRole("region", {
      name: "Message content"
    });
    await expect(content.scrollHeight).toBeGreaterThan(content.clientHeight);
    await expect(content.clientHeight).toBeLessThanOrEqual(window.innerHeight * 0.4 + 1);
    content.focus();
    await expect(content).toHaveFocus();
    content.scrollTo({
      top: content.scrollHeight
    });
    await waitFor(() => expect(content.scrollTop).toBeGreaterThan(0));
    await expect(content.scrollWidth).toBeLessThanOrEqual(content.clientWidth);
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...LongMessage,
  globals: Phone.globals,
  decorators: Phone.decorators,
  parameters: Phone.parameters
}`,...b.parameters?.docs?.source}}};const xe=["Outgoing","Phone","Compacted","CompactedPhone","Queued","QueuedPhone","DeliveryFailures","LongMessage","LongMessagePhone"];export{l as Compacted,v as CompactedPhone,y as DeliveryFailures,u as LongMessage,b as LongMessagePhone,i as Outgoing,s as Phone,p as Queued,x as QueuedPhone,xe as __namedExportsOrder,ve as default};

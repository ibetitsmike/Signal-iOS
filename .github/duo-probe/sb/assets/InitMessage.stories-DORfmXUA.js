import{j as o,bQ as y,S as w}from"./iframe-DpCW2UOM.js";import{l as v}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const{expect:t,userEvent:c,within:i}=__STORYBOOK_MODULE_TEST__,s={type:"workspace-init",id:"workspace-init",historySequence:-1,status:"running",hookPath:"/home/user/projects/my-app",lines:[{line:"Preparing workspace",isError:!1,step:!0},{line:"Creating git worktree",isError:!1,step:!0},{line:"Preparing worktree (new branch 'feature')",isError:!1},{line:"Checking out files",isError:!1,step:!0},{line:"HEAD is now at 1234567 Add application",isError:!1}],progress:{label:"Updating files",percent:87},exitCode:null,timestamp:w,durationMs:null},l={...s,status:"success",lines:[...s.lines,{line:"Running init hook: .xum/init",isError:!1,step:!0},{line:"Dependencies installed",isError:!1}],progress:null,exitCode:0,durationMs:3e3},x={...l,status:"error",lines:[...l.lines,{line:"Package installation failed",isError:!0}],exitCode:1},W={...v,title:"App/Chat/Messages/Init",component:y,render:a=>o.jsx("div",{className:"bg-background flex min-h-screen items-start p-6",children:o.jsx("div",{className:"w-full max-w-2xl min-w-0",children:o.jsx(y,{...a})})})},r={args:{message:s},play:async({canvasElement:a})=>{const e=i(a);await t(e.getByRole("progressbar")).toHaveAttribute("aria-valuenow","87"),await t(e.getAllByLabelText("Completed")).toHaveLength(2),await t(e.getByLabelText("In progress")).toBeVisible();const n=e.getByRole("button",{name:"More details"});await t(n).toHaveAttribute("aria-expanded","false"),await t(e.queryByText(s.hookPath)).not.toBeInTheDocument(),await c.click(n),await t(e.getByText(s.hookPath)).toBeVisible(),await t(e.getByText(s.lines[2].line)).toBeVisible(),await c.click(n)}},p={args:{message:{...s,progress:null}},play:async({canvasElement:a})=>{const e=i(a);await t(e.queryByRole("progressbar")).not.toBeInTheDocument(),await t(e.getByLabelText("In progress")).toBeVisible()}},g={args:{message:l},play:async({canvasElement:a})=>{const e=i(a),n=e.getByRole("button",{name:/Workspace created/});await t(n).toHaveAttribute("aria-expanded","false"),await t(e.queryByRole("list")).not.toBeInTheDocument(),await c.click(n),await t(e.getByText("Dependencies installed")).toBeVisible(),await t(e.getAllByLabelText("Completed")).toHaveLength(4),await c.click(n),await t(e.queryByText("Dependencies installed")).not.toBeInTheDocument()}},u={args:{message:x},play:async({canvasElement:a})=>{const e=i(a);await t(e.getByRole("button",{name:/Workspace setup failed/})).toHaveAttribute("aria-expanded","true"),await t(e.getByRole("button",{name:"More details"})).toHaveAttribute("aria-expanded","true"),await t(e.getByText("Package installation failed")).toHaveClass("text-init-output-error-text"),await t(e.getByLabelText("Failed")).toBeVisible()}},d={args:{message:{...l,lines:l.lines.map(({line:a,isError:e})=>({line:a,isError:e}))}},play:async({canvasElement:a})=>{const e=i(a);await c.click(e.getByRole("button",{name:/Workspace created/})),await t(e.getByText("Dependencies installed")).toBeVisible(),await t(e.queryByRole("button",{name:"More details"})).not.toBeInTheDocument(),await t(e.queryByRole("list")).not.toBeInTheDocument()}},m={...r,args:{message:{...s,lines:[...s.lines,{line:"Checking out files for a workspace with a very long descriptive branch name",isError:!1,step:!0}]}},decorators:[a=>o.jsx("div",{"data-testid":"init-phone",style:{width:375,maxWidth:"100%"},children:o.jsx(a,{})})],globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},play:async({canvasElement:a})=>{const e=i(a),n=e.getByTestId("init-phone"),B=e.getByRole("progressbar");await t(n.getBoundingClientRect().width).toBeLessThanOrEqual(375),await t(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth),await t(B.getBoundingClientRect().width).toBeGreaterThan(0),await t(B.getBoundingClientRect().right).toBeLessThanOrEqual(n.getBoundingClientRect().right);const h=e.getByText("87%");await t(h.getBoundingClientRect().right).toBeLessThanOrEqual(n.getBoundingClientRect().right)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: RUNNING_MESSAGE
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "87");
    await expect(canvas.getAllByLabelText("Completed")).toHaveLength(2);
    await expect(canvas.getByLabelText("In progress")).toBeVisible();
    const details = canvas.getByRole("button", {
      name: "More details"
    });
    await expect(details).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.queryByText(RUNNING_MESSAGE.hookPath)).not.toBeInTheDocument();
    await userEvent.click(details);
    await expect(canvas.getByText(RUNNING_MESSAGE.hookPath)).toBeVisible();
    await expect(canvas.getByText(RUNNING_MESSAGE.lines[2].line)).toBeVisible();
    await userEvent.click(details);
  }
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      ...RUNNING_MESSAGE,
      progress: null
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole("progressbar")).not.toBeInTheDocument();
    await expect(canvas.getByLabelText("In progress")).toBeVisible();
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    message: SUCCESS_MESSAGE
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("button", {
      name: /Workspace created/
    });
    await expect(header).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.queryByRole("list")).not.toBeInTheDocument();
    await userEvent.click(header);
    await expect(canvas.getByText("Dependencies installed")).toBeVisible();
    await expect(canvas.getAllByLabelText("Completed")).toHaveLength(4);
    await userEvent.click(header);
    await expect(canvas.queryByText("Dependencies installed")).not.toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    message: ERROR_MESSAGE
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", {
      name: /Workspace setup failed/
    })).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByRole("button", {
      name: "More details"
    })).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Package installation failed")).toHaveClass("text-init-output-error-text");
    await expect(canvas.getByLabelText("Failed")).toBeVisible();
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      ...SUCCESS_MESSAGE,
      lines: SUCCESS_MESSAGE.lines.map(({
        line,
        isError
      }) => ({
        line,
        isError
      }))
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /Workspace created/
    }));
    await expect(canvas.getByText("Dependencies installed")).toBeVisible();
    await expect(canvas.queryByRole("button", {
      name: "More details"
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole("list")).not.toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Running,
  args: {
    message: {
      ...RUNNING_MESSAGE,
      lines: [...RUNNING_MESSAGE.lines, {
        line: "Checking out files for a workspace with a very long descriptive branch name",
        isError: false,
        step: true
      }]
    }
  },
  decorators: [Story => <div data-testid="init-phone" style={{
    width: 375,
    maxWidth: "100%"
  }}>
        <Story />
      </div>],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const frame = canvas.getByTestId("init-phone");
    const progress = canvas.getByRole("progressbar");
    await expect(frame.getBoundingClientRect().width).toBeLessThanOrEqual(375);
    await expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth);
    await expect(progress.getBoundingClientRect().width).toBeGreaterThan(0);
    await expect(progress.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
    const percent = canvas.getByText("87%");
    await expect(percent.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
  }
}`,...m.parameters?.docs?.source}}};const j=["Running","RunningWithoutProgress","InitHookSuccess","InitHookError","LegacySuccess","RunningPhone"];export{u as InitHookError,g as InitHookSuccess,d as LegacySuccess,r as Running,m as RunningPhone,p as RunningWithoutProgress,j as __namedExportsOrder,W as default};

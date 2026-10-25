import{j as s,s as w,e as g,a as k,c as y,d as E,bG as T,bH as j}from"./iframe-DwmVy7SQ.js";import{t as _}from"./contrast-Bnc7IxMq.js";import{a as C,b as P,A as h}from"./meta-CT6GdK4g.js";import{c as R}from"./git-Ekgdg9se.js";import{c as v}from"./orpc-sAt07-6s.js";import{c as m,g as A}from"./workspaces-DVCSHIwS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:B,userEvent:x,waitFor:b,within:l}=__STORYBOOK_MODULE_TEST__,he={...C,title:"Components/WorkspaceMenuBar"},S={type:"devcontainer",configPath:".devcontainer/devcontainer.json"};function D(t,e){const n=R(e);return(r,a)=>{if(a.includes("git rev-parse --abbrev-ref HEAD")){const u=t.get(r)??"main";return Promise.resolve({success:!0,output:u,exitCode:0,wall_duration_ms:10})}return n(r,a)}}function f(t){const e="2023-11-14T22:13:20.000Z",n=[m({id:"dc-1",name:"feature/lazy-start",projectName:"mux",runtimeConfig:S,createdAt:e}),m({id:"dc-2",name:"fix/sidebar-overflow",projectName:"mux",createdAt:e})],r=A(n);w(n[0]),g([...r.keys()]),k(),y();const a=new Map([...t==="running"?[["dc-1","feature/lazy-start"]]:[],["dc-2","fix/sidebar-overflow"]]),u=new Map([...t==="running"?[["dc-1",{ahead:2,dirty:1}]]:[],["dc-2",{ahead:0,behind:3}]]);return v({projects:r,workspaces:n,executeBash:D(a,u),runtimeStatuses:new Map([["dc-1",t],["dc-2","unsupported"]])})}const o={parameters:{pixel:{matrix:P}},render:()=>s.jsx(h,{setup:()=>f("running")})},c={render:()=>s.jsx(h,{setup:()=>f("stopped")}),play:async({canvasElement:t})=>{const e=await l(t).findByText("Devcontainer Stopped",{},{timeout:15e3});await B(_(()=>[e]).join(`
`)).toBe("")}},i={render:()=>s.jsx(h,{setup:()=>f("unknown")})},W=390;function I(t){const e=E.c(3);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n={width:W,height:844,overflow:"hidden"},e[0]=n):n=e[0];let r;return e[1]!==t?(r=s.jsx("div",{style:n,children:s.jsx(t,{})}),e[1]=t,e[2]=r):r=e[2],r}const p={globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[I],parameters:{...C.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:()=>s.jsx(h,{setup:()=>{const t=m({id:"archiving-1",name:"feature/long-branch-name-that-truncates-on-phones",projectName:"mux",createdAt:"2023-11-14T22:13:20.000Z"}),e=A([t]);w(t),g([...e.keys()]),k(),y();const n=v({projects:e,workspaces:[t]});return n.workspace.archive=()=>new Promise(()=>{}),n}}),play:async({canvasElement:t})=>{const e=l(t);await x.click(await e.findByTestId("workspace-more-actions")),await x.click(await b(()=>l(document.body).getByRole("button",{name:/Archive workspace/}))),await b(()=>{const n=e.getByTestId("workspace-menu-bar").getBoundingClientRect(),r=e.getByTestId("workspace-archiving-status").getBoundingClientRect(),a=e.getByTestId("workspace-more-actions").getBoundingClientRect();if(r.width===0||r.right>n.right+1||a.right>n.right+1)throw new Error(`Archiving status or header controls overflow the ${n.width}px header (status right=${r.right}, more right=${a.right})`)})}},d={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop","phone"]}}},render:()=>s.jsx(h,{setup:()=>{const t="/home/user/.mux/scratch/scratch-1",e={...m({id:"scratch-1",name:"scratch-scratch-1",projectName:"Scratch",projectPath:t,runtimeConfig:{type:"local"}}),kind:"scratch",namedWorkspacePath:t};return w(e),g([j]),k(),v({projects:new Map([[T,{projectKind:"system",trusted:!0,workspaces:[{kind:"scratch",path:t,id:e.id,name:e.name,runtimeConfig:{type:"local"}}]}]]),workspaces:[e]})}})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => createDevcontainerClient("running")} />
}`,...o.parameters?.docs?.source},description:{story:`Devcontainer workspace with a running container.
The top bar shows a "Container running" indicator next to the branch selector.`,...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => createDevcontainerClient("stopped")} />,
  // The chip label reaches WCAG AA in every theme; it was 1.8-2.9:1 on its muted tint (#6544).
  play: async ({
    canvasElement
  }) => {
    const chip = await within(canvasElement).findByText("Devcontainer Stopped", {}, {
      timeout: 15_000
    });
    await expect(textsBelowAaInThemes(() => [chip]).join("\\n")).toBe("");
  }
}`,...c.parameters?.docs?.source},description:{story:`Devcontainer workspace with a stopped container.
The top bar does NOT show a container indicator — verifies absence.`,...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => createDevcontainerClient("unknown")} />
}`,...i.parameters?.docs?.source},description:{story:"Devcontainer with unknown runtime status — no status chip should be visible.",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  decorators: [PhoneWidthDecorator],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => {
    const workspace = createWorkspace({
      id: "archiving-1",
      name: "feature/long-branch-name-that-truncates-on-phones",
      projectName: "mux",
      createdAt: "2023-11-14T22:13:20.000Z"
    });
    const projects = groupWorkspacesByProject([workspace]);
    selectWorkspace(workspace);
    expandProjects([...projects.keys()]);
    collapseRightSidebar();
    collapseLeftSidebar();
    const client = createMockORPCClient({
      projects,
      workspaces: [workspace]
    });
    // Never settle so the story holds the in-flight state for the snapshot.
    client.workspace.archive = () => new Promise(() => undefined);
    return client;
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByTestId("workspace-more-actions"));
    await userEvent.click(await waitFor(() => within(document.body).getByRole("button", {
      name: /Archive workspace/
    })));
    await waitFor(() => {
      const bar = canvas.getByTestId("workspace-menu-bar").getBoundingClientRect();
      const status = canvas.getByTestId("workspace-archiving-status").getBoundingClientRect();
      const more = canvas.getByTestId("workspace-more-actions").getBoundingClientRect();
      if (status.width === 0 || status.right > bar.right + 1 || more.right > bar.right + 1) {
        throw new Error(\`Archiving status or header controls overflow the \${bar.width}px header (status right=\${status.right}, more right=\${more.right})\`);
      }
    });
  }
}`,...p.parameters?.docs?.source},description:{story:`Archive in flight: the header shows "Archiving..." next to the title. Pinned to the phone
viewport because the status is non-shrinking and the truncating title must yield to it
without pushing the right-side controls off-screen.`,...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        viewports: ["laptop", "phone"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => {
    const scratchPath = "/home/user/.mux/scratch/scratch-1";
    const workspace = {
      ...createWorkspace({
        id: "scratch-1",
        name: "scratch-scratch-1",
        projectName: "Scratch",
        projectPath: scratchPath,
        runtimeConfig: {
          type: "local"
        }
      }),
      kind: "scratch" as const,
      namedWorkspacePath: scratchPath
    };
    selectWorkspace(workspace);
    expandProjects([SCRATCH_SIDEBAR_SECTION_ID]);
    collapseRightSidebar();
    return createMockORPCClient({
      projects: new Map([[SCRATCH_PROJECT_CONFIG_KEY, {
        projectKind: "system",
        trusted: true,
        workspaces: [{
          kind: "scratch",
          path: scratchPath,
          id: workspace.id,
          name: workspace.name,
          runtimeConfig: {
            type: "local"
          }
        }]
      }]]),
      workspaces: [workspace]
    });
  }} />
}`,...d.parameters?.docs?.source}}};const de=["DevcontainerRunning","DevcontainerStopped","DevcontainerUnknown","ArchivingPhone","ScratchWorkspace"];export{p as ArchivingPhone,o as DevcontainerRunning,c as DevcontainerStopped,i as DevcontainerUnknown,d as ScratchWorkspace,de as __namedExportsOrder,he as default};

import{j as a,bM as w,d as T,W as O,aA as G,aK as M,aL as L,aM as V,aN as W,aO as H,aJ as I}from"./iframe-DwmVy7SQ.js";import{l as F}from"./meta-CT6GdK4g.js";import{m as U,a as K,b as q}from"./coder-CMGH9rj0.js";import{c as J}from"./orpc-sAt07-6s.js";import{R as x,d as _}from"./AIView-Cw4ZT1Fh.js";import{S as Y,s as $}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./ConfirmationModal-C1groiNk.js";import"./sendDispatchModes-BJ8PBEam.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./shell-NsnPoeBt.js";import"./TimelinePanel-B7hLQBAD.js";import"./timelineReveal-HqQYIr77.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./slashCommandHints-BSKyjYjN.js";import"./workspaces-DVCSHIwS.js";const{expect:c,fn:r,userEvent:d,within:s}=__STORYBOOK_MODULE_TEST__,z={local:{available:!0},worktree:{available:!0},ssh:{available:!0},docker:{available:!0}};function k(n){return{status:"loaded",data:{...z,devcontainer:n}}}const Q=k({available:!1,reason:"devcontainer CLI not found. Install from https://containers.dev/"}),X=k({available:!0,cliVersion:"0.81.1",configs:[{path:".devcontainer/devcontainer.json",label:"Default (.devcontainer/devcontainer.json)"}]}),Z=k({available:!0,cliVersion:"0.81.1",configs:[{path:".devcontainer/devcontainer.json",label:"Default (.devcontainer/devcontainer.json)"},{path:".devcontainer/backend/devcontainer.json",label:"Backend (.devcontainer/backend/devcontainer.json)"},{path:".devcontainer/frontend/devcontainer.json",label:"Frontend (.devcontainer/frontend/devcontainer.json)"}]}),S={value:w.WORKTREE,defaultMode:w.WORKTREE,onChange:r(),runtimeAvailabilityState:k({available:!0})},Oe={...F,title:"App/Chat/Creation Controls",component:x,render:n=>a.jsx("div",{className:"bg-background p-6",children:a.jsx("div",{className:"w-full max-w-64",children:a.jsx(x,{...n})})})},ee={branches:["main","develop"],branchLoad:"loaded",trunkBranch:"main",onTrunkBranchChange:r(),coderConfigFallback:{},sshHostFallback:"devbox.internal",defaultRuntimeMode:w.WORKTREE,disabled:!1,projectPath:"/home/user/projects/my-app",userProjects:new Map,onSelectedProjectPathChange:r(),projectSelectDisabled:!1,projectName:"my-app",nameState:{name:"devcontainer-story",title:"Devcontainer Story",isGenerating:!1,autoGenerate:!0,error:null,setAutoGenerate:r(),setName:r()}};function j(n){const e=T.c(4);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t={mode:"devcontainer",configPath:""},e[0]=t):t=e[0];const[o,l]=O.useState(t);let i;return e[1]!==n.runtimeAvailabilityState||e[2]!==o?(i=a.jsx(Y,{setup:ne,children:a.jsx("div",{className:"bg-background p-6",children:a.jsx("div",{className:"max-w-3xl",children:a.jsx(_,{...ee,selectedRuntime:o,onSelectedRuntimeChange:l,runtimeAvailabilityState:n.runtimeAvailabilityState})})})}),e[1]=n.runtimeAvailabilityState,e[2]=o,e[3]=i):i=e[3],i}function ne(){return $({})}async function A(n){const t=await s(n).findByLabelText("Workspace type",{},{timeout:1e4});await d.click(t)}const m={args:{...S,coderInfo:U},play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await A(e),await s(document.body).findByRole("option",{name:/^Coder/i},{timeout:1e4}),await d.keyboard("{Escape}")}},p={args:{...S,coderInfo:K},play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await A(e),await s(document.body).findByRole("option",{name:/^SSH/i},{timeout:1e4}),await c(s(document.body).queryByRole("option",{name:/^Coder/i})).toBeNull(),await d.keyboard("{Escape}")}},u={args:{...S,coderInfo:q},play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await A(e);const t=await s(document.body).findByRole("option",{name:/^Coder/i},{timeout:1e4});await c(t).toHaveAttribute("aria-disabled","true"),await c(t).toHaveTextContent("2.20.0"),await c(t).toHaveTextContent("2.25.0"),await d.keyboard("{Escape}")}},v={args:{...S,runtimeAvailabilityState:Q},play:async({canvasElement:n})=>{const e=document.getElementById("storybook-root")??n;await A(e);const t=await s(document.body).findByRole("option",{name:/^Dev container/i});await c(t).toHaveAttribute("aria-disabled","true"),await d.keyboard("{Escape}")}},y={render:()=>a.jsx(j,{runtimeAvailabilityState:X}),play:async({canvasElement:n})=>{const e=s(n),t=await e.findByRole("combobox",{name:"Dev container config"});await c(t).toBeEnabled(),await c(e.findByText("Default (.devcontainer/devcontainer.json)")).resolves.toBeInTheDocument()}},b={render:()=>a.jsx(j,{runtimeAvailabilityState:Z}),play:async({canvasElement:n})=>{const e=s(n),t=await e.findByRole("combobox",{name:"Dev container config"});await d.click(t);const o=await s(document.body).findByRole("option",{name:/Backend \(\.devcontainer\/backend\/devcontainer\.json\)/i});await d.click(o),await c(e.findByText("Backend (.devcontainer/backend/devcontainer.json)")).resolves.toBeInTheDocument()}},D="/Users/dev/my-project";function te(n){const e=T.c(6),t=G();let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=J({projects:new Map([[D,{workspaces:[]}]]),workspaces:[]}),e[0]=o):o=e[0];const l=o;let i,g;e[1]!==t?(i=()=>(t.setClient(l),I().setClient(l),()=>{t.setClient(null),I().setClient(null)}),g=[l,t],e[1]=t,e[2]=i,e[3]=g):(i=e[2],g=e[3]),O.useEffect(i,g);let h;return e[4]!==n.children?(h=a.jsx(M,{client:l,children:a.jsx(L,{children:a.jsx(V,{children:a.jsx(W,{children:a.jsx(H,{children:n.children})})})})}),e[4]=n.children,e[5]=h):h=e[5],h}const P={name:"workspace-name",title:null,isGenerating:!1,autoGenerate:!0,error:null,setAutoGenerate:r(),setName:r()},ae={branches:["main"],branchLoad:"loaded",trunkBranch:"main",onTrunkBranchChange:r(),selectedRuntime:{mode:w.WORKTREE},coderConfigFallback:{},sshHostFallback:"devbox",defaultRuntimeMode:w.WORKTREE,onSelectedRuntimeChange:r(),disabled:!1,projectPath:D,userProjects:new Map,onSelectedProjectPathChange:r(),projectSelectDisabled:!1,projectName:"my-project",runtimeAvailabilityState:S.runtimeAvailabilityState,nameState:P};function B(n){return a.jsx(te,{children:a.jsx("div",{className:"bg-background p-6",children:a.jsx("div",{className:"max-w-4xl",children:a.jsx(_,{...ae,nameState:n})})})})}function N(n){return{...P,...n}}const f={render:()=>B(N({error:{kind:"generation",error:{type:"permission_denied",provider:"anthropic",raw:"Forbidden"}}}))},E={render:()=>B(N({error:{kind:"generation",error:{type:"rate_limit",raw:"Too many requests"}}}))},C={render:()=>B(N({error:{kind:"generation",error:{type:"authentication",authKind:"invalid_credentials",provider:"openai",raw:"Invalid API key"}}}))},R={render:()=>B(N({autoGenerate:!1,name:"invalid name!",error:{kind:"validation",message:'Branch names can only contain lowercase letters, numbers, hyphens, underscores, and "/" separators'}}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...BASE_ARGS,
    coderInfo: mockCoderInfoAvailable
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openWorkspaceTypeMenu(storyRoot);
    await within(document.body).findByRole("option", {
      name: /^Coder/i
    }, {
      timeout: 10000
    });
    await userEvent.keyboard("{Escape}");
  }
}`,...m.parameters?.docs?.source},description:{story:"Coder option is visible and selectable when Coder CLI is available.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...BASE_ARGS,
    coderInfo: mockCoderInfoMissing
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openWorkspaceTypeMenu(storyRoot);
    await within(document.body).findByRole("option", {
      name: /^SSH/i
    }, {
      timeout: 10000
    });
    await expect(within(document.body).queryByRole("option", {
      name: /^Coder/i
    })).toBeNull();
    await userEvent.keyboard("{Escape}");
  }
}`,...p.parameters?.docs?.source},description:{story:"Coder option is hidden when Coder CLI is missing.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...BASE_ARGS,
    coderInfo: mockCoderInfoOutdated
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openWorkspaceTypeMenu(storyRoot);
    const coderOption = await within(document.body).findByRole("option", {
      name: /^Coder/i
    }, {
      timeout: 10000
    });
    await expect(coderOption).toHaveAttribute("aria-disabled", "true");
    await expect(coderOption).toHaveTextContent("2.20.0");
    await expect(coderOption).toHaveTextContent("2.25.0");
    await userEvent.keyboard("{Escape}");
  }
}`,...u.parameters?.docs?.source},description:{story:"Coder option remains visible but disabled when CLI version is outdated.",...u.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...BASE_ARGS,
    runtimeAvailabilityState: DEVCONTAINER_UNAVAILABLE
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await openWorkspaceTypeMenu(storyRoot);
    const devcontainerOption = await within(document.body).findByRole("option", {
      name: /^Dev container/i
    });
    await expect(devcontainerOption).toHaveAttribute("aria-disabled", "true");
    await userEvent.keyboard("{Escape}");
  }
}`,...v.parameters?.docs?.source},description:{story:"Dev container runtime unavailable (option remains visible but disabled).",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DevcontainerCreationControlsStory runtimeAvailabilityState={DEVCONTAINER_SINGLE_CONFIG} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const configSelect = await canvas.findByRole("combobox", {
      name: "Dev container config"
    });
    await expect(configSelect).toBeEnabled();
    await expect(canvas.findByText("Default (.devcontainer/devcontainer.json)")).resolves.toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source},description:{story:"Dev container runtime with a single config.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <DevcontainerCreationControlsStory runtimeAvailabilityState={DEVCONTAINER_MULTI_CONFIG} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const configSelect = await canvas.findByRole("combobox", {
      name: "Dev container config"
    });
    await userEvent.click(configSelect);
    const backendOption = await within(document.body).findByRole("option", {
      name: /Backend \\(\\.devcontainer\\/backend\\/devcontainer\\.json\\)/i
    });
    await userEvent.click(backendOption);
    await expect(canvas.findByText("Backend (.devcontainer/backend/devcontainer.json)")).resolves.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source},description:{story:"Dev container runtime with multiple configs.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => renderCreationControls(createNameState({
    error: {
      kind: "generation",
      error: {
        type: "permission_denied",
        provider: "anthropic",
        raw: "Forbidden"
      }
    }
  }))
}`,...f.parameters?.docs?.source},description:{story:"Name generation failure when provider blocks access for the current account scope.",...f.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => renderCreationControls(createNameState({
    error: {
      kind: "generation",
      error: {
        type: "rate_limit",
        raw: "Too many requests"
      }
    }
  }))
}`,...E.parameters?.docs?.source},description:{story:"Name generation failure when provider rate limits requests.",...E.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => renderCreationControls(createNameState({
    error: {
      kind: "generation",
      error: {
        type: "authentication",
        authKind: "invalid_credentials",
        provider: "openai",
        raw: "Invalid API key"
      }
    }
  }))
}`,...C.parameters?.docs?.source},description:{story:"Name generation failure when API credentials are invalid.",...C.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => renderCreationControls(createNameState({
    autoGenerate: false,
    name: "invalid name!",
    error: {
      kind: "validation",
      message: 'Branch names can only contain lowercase letters, numbers, hyphens, underscores, and "/" separators'
    }
  }))
}`,...R.parameters?.docs?.source}}};const _e=["CoderAvailable","CoderNotAvailable","CoderOutdated","DevcontainerUnavailable","DevcontainerSingleConfig","DevcontainerMultiConfig","NameGenerationPermissionDenied","NameGenerationRateLimited","NameGenerationAuthError","NameValidationError"];export{m as CoderAvailable,p as CoderNotAvailable,u as CoderOutdated,b as DevcontainerMultiConfig,y as DevcontainerSingleConfig,v as DevcontainerUnavailable,C as NameGenerationAuthError,f as NameGenerationPermissionDenied,E as NameGenerationRateLimited,R as NameValidationError,_e as __namedExportsOrder,Oe as default};

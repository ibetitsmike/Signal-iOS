import{j as r,d as T,E as S,u as m,L as P,o as A,l as C,m as _}from"./iframe-DwmVy7SQ.js";import{a as D,A as p}from"./meta-CT6GdK4g.js";import{w as O}from"./desktopRfb.test-fixture-gs4krAax.js";import{s as I}from"./chatSetup-D_GSrzyc.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";import"./git-Ekgdg9se.js";const{expect:n,userEvent:k,waitFor:x,within:i}=__STORYBOOK_MODULE_TEST__,f="ws-desktop-viewer",R={available:!0,width:1280,height:720,sessionId:"desktop-story"};function d(e,t=640){const a=I({workspaceId:f,workspaceName:"desktop-viewer",messages:[],experiments:{[S.PORTABLE_DESKTOP]:!0}});return m(P,!0),m(A(f),!1),m(C,t),m(_(f),{version:1,openTabsOnly:!0,nextId:2,focusedTabsetId:"desktop-tabset",root:{type:"tabset",id:"desktop-tabset",tabs:["desktop"],activeTab:"desktop"}}),a.desktop={watchViewer:O,acknowledgeViewerRelease:()=>Promise.resolve(),detachViewer:()=>Promise.resolve(),openWindow:({instanceId:o})=>Promise.resolve({instanceId:o}),closeWindow:()=>Promise.resolve(),getWindow:()=>Promise.resolve(null),getPrereqStatus:()=>Promise.resolve({available:!0}),getCapability:()=>Promise.resolve(R),getBootstrap:()=>e==="checking"?new Promise(()=>{}):e==="error"?Promise.reject(new Error("The desktop bridge could not be reached.")):e==="unavailable"?Promise.resolve({capability:{available:!1,reason:"unsupported_runtime"}}):Promise.resolve({capability:R,bridgePath:"/desktop/ws",token:"desktop-story"})},a}const de={...D,title:"App/DesktopViewer",parameters:{...D.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}},viewport:{options:{desktop:{name:"Desktop",styles:{width:"1900px",height:"1000px"},type:"desktop"},phone:{name:"Phone",styles:{width:"390px",height:"844px"},type:"mobile"}}}},globals:{viewport:{value:"desktop",isRotated:!1}}};async function B(e){const a=await i(e).findByRole("toolbar",{name:"Desktop controls"});await n(i(a).getByRole("button",{name:"Take control"})).toBeDisabled(),await n(i(a).getByRole("button",{name:"Zoom to 100%"})).toBeDisabled()}async function g(e){const t=i(e),a=await t.findByRole("button",{name:"Take control"});await x(()=>n(a).toBeEnabled());const o=e.querySelector("[data-desktop-viewport] canvas");if(!o)throw new Error("Connected desktop did not mount its screen");const s=o.getContext("2d");if(!s)throw new Error("Desktop fixture has no canvas context");const E=getComputedStyle(o);return s.fillStyle=E.getPropertyValue("--color-sidebar"),s.fillRect(0,0,o.width,o.height),s.fillStyle=E.getPropertyValue("--color-foreground"),s.font="28px sans-serif",s.fillText("Desktop preview",48,72),s.font="18px sans-serif",s.fillText("Deterministic screen fixture — no remote session",48,112),{canvas:t,control:a,screen:o}}const c={render:()=>r.jsx(p,{setup:()=>d("connected")}),play:async({canvasElement:e})=>{const{canvas:t,control:a,screen:o}=await g(e),s=new KeyboardEvent("keydown",{key:"w",ctrlKey:!0,bubbles:!0,cancelable:!0});o.dispatchEvent(s),await n(s.defaultPrevented).toBe(!1),await n(a).toHaveAttribute("aria-pressed","false"),await n(t.getByRole("button",{name:"Zoom to 100%"})).toHaveAttribute("aria-pressed","false")}},u={...c,play:async({canvasElement:e})=>{const{canvas:t,control:a,screen:o}=await g(e);await k.click(a),await k.click(o),await n(t.getByRole("button",{name:"Release control"})).toHaveAttribute("aria-pressed","true")}},w={...c,play:async({canvasElement:e})=>{const{canvas:t}=await g(e);await k.click(t.getByRole("button",{name:"Zoom to 100%"})),await n(t.getByRole("button",{name:"Zoom to fit"})).toHaveAttribute("aria-pressed","true"),await n(t.getByRole("button",{name:"Take control"})).toHaveAttribute("aria-pressed","false")}},y={render:()=>r.jsx(p,{setup:()=>d("checking")}),play:async({canvasElement:e})=>{await B(e),await i(e).findByText("Checking desktop availability")}},l={render:()=>r.jsx(p,{setup:()=>d("unavailable")}),play:async({canvasElement:e})=>{await i(e).findByText("Desktop unavailable"),await B(e)}},v={render:()=>r.jsx(p,{setup:()=>d("error")}),play:async({canvasElement:e})=>{const t=i(e);await t.findByText("Desktop connection failed"),await B(e),await k.click(t.getByRole("button",{name:"Retry"})),await t.findByText("Desktop connection failed")}},h={render:()=>r.jsx(p,{setup:()=>d("connected",300)}),decorators:[e=>r.jsx("div",{style:{width:1e3,height:800},children:r.jsx(e,{})})],play:async({canvasElement:e})=>{await g(e);const t=i(e).getByRole("toolbar",{name:"Desktop controls"});await x(async()=>{await n(t.getBoundingClientRect().width).toBeGreaterThan(0),await n(t.getBoundingClientRect().width).toBeLessThanOrEqual(390),await n(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)})}};function W(e){const t=T.c(3);let a;t[0]===Symbol.for("react.memo_cache_sentinel")?(a={width:390,height:844,overflow:"hidden"},t[0]=a):a=t[0];let o;return t[1]!==e?(o=r.jsx("div",{style:a,children:r.jsx(e,{})}),t[1]=e,t[2]=o):o=t[2],o}const b={...l,decorators:[W],globals:{viewport:{value:"phone",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async({canvasElement:e})=>{const t=i(e);await t.findByRole("textbox",{name:"Message"}),await x(()=>n(t.queryByRole("complementary")).not.toBeInTheDocument()),await n(t.queryByRole("toolbar",{name:"Desktop controls"})).not.toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDesktopStory("connected")} />,
  play: async ({
    canvasElement
  }) => {
    const {
      canvas,
      control,
      screen
    } = await waitForDesktopScreen(canvasElement);
    // The sidebar's capture-phase close-tab shortcut must leave guest Ctrl+W untouched.
    const closeTab = new KeyboardEvent("keydown", {
      key: "w",
      ctrlKey: true,
      bubbles: true,
      cancelable: true
    });
    screen.dispatchEvent(closeTab);
    await expect(closeTab.defaultPrevented).toBe(false);
    await expect(control).toHaveAttribute("aria-pressed", "false");
    await expect(canvas.getByRole("button", {
      name: "Zoom to 100%"
    })).toHaveAttribute("aria-pressed", "false");
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...ViewOnly,
  play: async ({
    canvasElement
  }) => {
    const {
      canvas,
      control,
      screen
    } = await waitForDesktopScreen(canvasElement);
    await userEvent.click(control);
    await userEvent.click(screen);
    await expect(canvas.getByRole("button", {
      name: "Release control"
    })).toHaveAttribute("aria-pressed", "true");
  }
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...ViewOnly,
  play: async ({
    canvasElement
  }) => {
    const {
      canvas
    } = await waitForDesktopScreen(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Zoom to 100%"
    }));
    await expect(canvas.getByRole("button", {
      name: "Zoom to fit"
    })).toHaveAttribute("aria-pressed", "true");
    await expect(canvas.getByRole("button", {
      name: "Take control"
    })).toHaveAttribute("aria-pressed", "false");
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDesktopStory("checking")} />,
  play: async ({
    canvasElement
  }) => {
    await expectDisabledControls(canvasElement);
    await within(canvasElement).findByText("Checking desktop availability");
  }
}`,...y.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDesktopStory("unavailable")} />,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByText("Desktop unavailable");
    await expectDisabledControls(canvasElement);
  }
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDesktopStory("error")} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("Desktop connection failed");
    await expectDisabledControls(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Retry"
    }));
    await canvas.findByText("Desktop connection failed");
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupDesktopStory("connected", 300)} />,
  decorators: [Story => <div style={{
    width: 1000,
    height: 800
  }}>
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    await waitForDesktopScreen(canvasElement);
    const toolbar = within(canvasElement).getByRole("toolbar", {
      name: "Desktop controls"
    });
    await waitFor(async () => {
      await expect(toolbar.getBoundingClientRect().width).toBeGreaterThan(0);
      await expect(toolbar.getBoundingClientRect().width).toBeLessThanOrEqual(390);
      await expect(toolbar.scrollWidth).toBeLessThanOrEqual(toolbar.clientWidth);
    });
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Unavailable,
  decorators: [PhoneDecorator],
  globals: {
    viewport: {
      value: "phone",
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
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole("textbox", {
      name: "Message"
    });
    // The full app intentionally hides workspace insights at phone widths.
    await waitFor(() => expect(canvas.queryByRole("complementary")).not.toBeInTheDocument());
    await expect(canvas.queryByRole("toolbar", {
      name: "Desktop controls"
    })).not.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}};const me=["ViewOnly","Controlling","NativeZoom","Checking","Unavailable","ConnectionError","NarrowSidebar","PhoneUnavailable"];export{y as Checking,v as ConnectionError,u as Controlling,h as NarrowSidebar,w as NativeZoom,b as PhoneUnavailable,l as Unavailable,c as ViewOnly,me as __namedExportsOrder,de as default};

import{j as u,E as W,u as l,L as C,R as _,l as D,m as A,n as P,e as I}from"./iframe-DpCW2UOM.js";import{a as k,A as y}from"./meta-BwRgvoZ6.js";import{s as L}from"./chatSetup-48_rCYsC.js";import{c as O}from"./workspaces-MVQPvkVv.js";import{w as N}from"./desktopRfb.test-fixture-C10MVKJ0.js";import p from"./desktopRfb-BIwRzLCO.js";import{a as b,b as E}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./orpc-DLtOjQkt.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";const{expect:t,fn:M,userEvent:v,waitFor:f,within:w}=__STORYBOOK_MODULE_TEST__,o="desktop-shared-agent",S="desktop-owner",s="release-validation-with-an-intentionally-long-workspace-name",r=O({id:"desktop-isolated-agent",name:"isolated-agent",projectName:"desktop-demo"}),T={available:!0,width:1280,height:720,sessionId:"session"},m=M(({workspaceId:e})=>Promise.resolve({capability:{...T,...e===o?{sharedDesktop:{ownerWorkspaceId:S,ownerName:s}}:{}},bridgePath:`/desktop/ws/${e}`,token:`token-for-${e}`}));function R(e=!1){m.mockClear(),p.instances=[];const a=L({workspaceId:o,workspaceName:"shared-agent",projectName:"desktop-demo",messages:[],additionalWorkspaces:[r],experiments:{[W.PORTABLE_DESKTOP]:!0}});a.desktop={watchViewer:N,acknowledgeViewerRelease:()=>Promise.resolve(),detachViewer:()=>Promise.resolve(),openWindow:({instanceId:n})=>Promise.resolve({instanceId:n}),closeWindow:()=>Promise.resolve(),getWindow:()=>Promise.resolve(null),getPrereqStatus:()=>Promise.resolve({available:!0}),getCapability:()=>Promise.resolve(T),getBootstrap:m},l(C,e),l(_,"desktop"),l(D,320);for(const n of[o,r.id])l(A(n),void 0),P(n);return I([r.projectPath]),a}async function h(e,a,n=!0){const i=w(e);await f(async()=>{const x=i.getByLabelText("Desktop session preview");n?await t(x).toBeVisible():await t(x).not.toBeVisible(),await t(m).toHaveBeenLastCalledWith({workspaceId:a,viewerId:t.any(String)});const g=p.instances.at(-1);if(!g)throw new Error("Desktop viewer did not connect");const B=new URL(g.url);await t(B.pathname).toBe(`/desktop/ws/${a}`),await t(B.searchParams.get("token")).toBe(`token-for-${a}`),await t(g.viewOnly).toBe(!0)}),await t(m).not.toHaveBeenCalledWith(t.objectContaining({workspaceId:S}))}const ue={...k,title:"App/Desktop",beforeEach:()=>()=>{for(const e of p.instances)e.disconnect();p.instances=[]}},d={globals:{viewport:{value:"desktopBindingWide",isRotated:!1}},parameters:{...k.parameters,viewport:{options:{desktopBindingWide:{name:"Desktop (1900px)",styles:{width:"1900px",height:"1000px"},type:"desktop"}}},pixel:{matrix:{themes:["dark","light"],viewports:["desktop"]}}},render:()=>u.jsx(y,{setup:()=>R()}),play:async({canvasElement:e})=>{const a=w(e);await h(e,o),await t(a.getByText(`Shared desktop · ${s}`)).toBeVisible();const n=p.instances.at(-1);await v.click(a.getByText(r.name,{exact:!0})),await h(e,r.id),await t(a.queryByText(`Shared desktop · ${s}`)).not.toBeInTheDocument(),await t(n.disconnected).toBe(!0),await v.click(a.getByText("shared-agent",{exact:!0})),await h(e,o);const i=a.getByText(`Shared desktop · ${s}`);await t(i).toBeVisible(),await t(i.scrollWidth).toBeGreaterThan(i.clientWidth),await t(getComputedStyle(i).textOverflow).toBe("ellipsis"),await t(i.getBoundingClientRect().width).toBeLessThanOrEqual(320),await b(e),E()}},c={globals:{viewport:{value:"desktopBindingPhone",isRotated:!1}},parameters:{...k.parameters,viewport:{options:{desktopBindingPhone:{name:"Phone (390px)",styles:{width:"390px",height:"844px"},type:"mobile"}}},pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:()=>u.jsx("div",{"data-testid":"desktop-phone-frame",style:{width:390,height:844,overflow:"hidden"},children:u.jsx(y,{setup:()=>R(!0)})}),play:async({canvasElement:e})=>{await h(e,o,!1),await f(async()=>{await t(w(e).getByText(`Shared desktop · ${s}`)).not.toBeVisible();const n=e.querySelector('[aria-label="Workspace insights"]');if(!n)throw new Error("Missing workspace insights sidebar");await t(getComputedStyle(n).display).toBe("none")});const a=w(e).getByTestId("desktop-phone-frame");await t(a.getBoundingClientRect().width).toBe(390),await t(a.scrollWidth).toBeLessThanOrEqual(390),await b(e),E()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktopBindingWide",
      isRotated: false
    }
  },
  parameters: {
    ...appMeta.parameters,
    viewport: {
      options: {
        desktopBindingWide: {
          name: "Desktop (1900px)",
          styles: {
            width: "1900px",
            height: "1000px"
          },
          type: "desktop"
        }
      }
    },
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["desktop"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => setupDesktopStory()} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expectCallerConnection(canvasElement, CALLER_ID);
    await expect(canvas.getByText(\`Shared desktop · \${OWNER_NAME}\`)).toBeVisible();
    const sharedViewer = DesktopRfb.instances.at(-1)!;
    await userEvent.click(canvas.getByText(isolatedWorkspace.name, {
      exact: true
    }));
    await expectCallerConnection(canvasElement, isolatedWorkspace.id);
    await expect(canvas.queryByText(\`Shared desktop · \${OWNER_NAME}\`)).not.toBeInTheDocument();
    await expect(sharedViewer.disconnected).toBe(true);
    await userEvent.click(canvas.getByText("shared-agent", {
      exact: true
    }));
    await expectCallerConnection(canvasElement, CALLER_ID);
    const label = canvas.getByText(\`Shared desktop · \${OWNER_NAME}\`);
    await expect(label).toBeVisible();
    await expect(label.scrollWidth).toBeGreaterThan(label.clientWidth);
    await expect(getComputedStyle(label).textOverflow).toBe("ellipsis");
    await expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(320);
    await waitForChatInputAutofocusDone(canvasElement);
    blurActiveElement();
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktopBindingPhone",
      isRotated: false
    }
  },
  parameters: {
    ...appMeta.parameters,
    viewport: {
      options: {
        desktopBindingPhone: {
          name: "Phone (390px)",
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
  // The test-runner ignores viewport globals; the wrapper exercises the same narrow container.
  render: () => <div data-testid="desktop-phone-frame" style={{
    width: 390,
    height: 844,
    overflow: "hidden"
  }}>
      <AppWithMocks setup={() => setupDesktopStory(true)} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    // The app intentionally hides Workspace insights below its minimum usable width, even
    // for fine pointers. Keep that mobile behavior rather than forcing a visible test-only panel.
    await expectCallerConnection(canvasElement, CALLER_ID, false);
    await waitFor(async () => {
      await expect(within(canvasElement).getByText(\`Shared desktop · \${OWNER_NAME}\`)).not.toBeVisible();
      const sidebar = canvasElement.querySelector('[aria-label="Workspace insights"]');
      if (!sidebar) throw new Error("Missing workspace insights sidebar");
      await expect(getComputedStyle(sidebar).display).toBe("none");
    });
    const frame = within(canvasElement).getByTestId("desktop-phone-frame");
    await expect(frame.getBoundingClientRect().width).toBe(390);
    await expect(frame.scrollWidth).toBeLessThanOrEqual(390);
    await waitForChatInputAutofocusDone(canvasElement);
    blurActiveElement();
  }
}`,...c.parameters?.docs?.source}}};const ke=["SharedBinding","SharedBindingPhone"];export{d as SharedBinding,c as SharedBindingPhone,ke as __namedExportsOrder,ue as default};

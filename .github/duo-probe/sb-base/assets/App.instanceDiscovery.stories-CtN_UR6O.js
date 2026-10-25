import{j as i,i as u,d as y,c as f,a as x,u as v,g,S as h}from"./iframe-C48Cgo5e.js";import{a as p,A as E}from"./meta-BMDQogfB.js";import{s as T}from"./chatSetup--9T4hSMU.js";import{a as k,c as _}from"./messages-Bf7rPDB1.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{waitFor:P,within:l}=__STORYBOOK_MODULE_TEST__,c="ws-instance-discovery",b={scope:"instance",limit:3},m={tasks:[{taskId:c,status:"workspace",workspaceName:"coordinator",title:"Coordinate the migration",relationship:"self",projectPath:"/home/alice/projects/mux",activity:"busy",depth:0},{taskId:"ws-release-cut-19c2",status:"workspace",workspaceName:"release-cut",title:"Cut release/2026.09",relationship:"unrelated",projectPath:"/home/alice/projects/platform/services/billing/reconciliation-pipeline-with-an-extremely-long-directory-name",activity:"busy",depth:0},{taskId:"ws-docs-sweep-42b0",status:"workspace",workspaceName:"docs-sweep",relationship:"unrelated",projectPath:"C:\\Users\\alice\\projects\\api-docs\\",activity:"idle",depth:0}],note:"Rows are root workspaces in this Xum instance and an availability snapshot. More rows match; pass `nextOffset` as `offset` to continue.",nextOffset:3};function R(){return f(),x(),v(g(c),{}),T({workspaceId:c,workspaceName:"coordinator",projectName:"mux",projectPath:"/home/alice/projects/mux",messages:[k("discovery-user","Which other workspaces are active right now?",{historySequence:1,timestamp:h-6e4}),_("discovery-assistant","",{historySequence:2,timestamp:h,toolCalls:[{type:"dynamic-tool",toolCallId:"discovery-list",toolName:"task_list",state:"output-available",input:b,output:m}]})]})}async function S(t){const e=l(t);(await e.findByText("task_list",{},{timeout:15e3})).click(),await P(()=>{if(e.queryByText("idle")==null||e.queryAllByText("busy").length!==2)throw new Error("instance rows did not render their activity snapshot")})}const ae={...p,title:"App/InstanceDiscovery"},o={globals:{viewport:{value:"instanceDiscoveryLaptop",isRotated:!1}},render:()=>i.jsx(E,{setup:R}),parameters:{...p.parameters,viewport:{options:{instanceDiscoveryLaptop:{name:"Laptop 1200",styles:{width:"1200px",height:"900px"},type:"desktop"}}},pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}},play:async({canvasElement:t})=>{await S(t);const e=l(t);if(e.queryAllByText("mux").length===0||e.queryByText("api-docs")==null)throw new Error("instance rows did not render their project basenames");if(e.queryByText(/reconciliation-pipeline-with-an-extremely-long/)==null)throw new Error("long project basename was dropped instead of truncated");if(e.queryByText("self")==null||e.queryAllByText("unrelated").length!==2)throw new Error("instance rows did not render their relationships");if(e.queryByText("docs-sweep")==null||e.queryByText("release-cut")!=null)throw new Error("untitled instance row did not fall back to its workspace name")}},a=390;function D(t){const e=y.c(3);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n={width:a,height:844,overflow:"hidden"},e[0]=n):n=e[0];let r;return e[1]!==t?(r=i.jsx("div",{"data-instance-discovery-phone-width":a,style:n,children:i.jsx(t,{})}),e[1]=t,e[2]=r):r=e[2],r}const s={...o,globals:{viewport:{value:"instanceDiscoveryPhone",isRotated:!1}},decorators:[D],parameters:{...p.parameters,viewport:{options:{instanceDiscoveryPhone:{name:"Phone 390",styles:{width:`${a}px`,height:"844px"},type:"mobile"}}},pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},play:async t=>{await o.play?.(t);const e=t.canvasElement.querySelector("[data-instance-discovery-phone-width]");if(!e)throw new Error("phone frame decorator did not render");const n=e.getBoundingClientRect();if(n.width!==a)throw new Error(`phone frame is ${n.width}px wide; expected ${a}px — the story would snapshot the wrong layout`);if(window.innerWidth<=u){const r=l(e).getByText(m.note).parentElement;if(!r)throw new Error("task_list details surface did not render");for(const w of r.querySelectorAll("*")){const d=w.getBoundingClientRect().right;if(d>n.right+1)throw new Error(`instance list content overflowed the ${a}px frame by ${Math.round(d-n.right)}px`)}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "instanceDiscoveryLaptop",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={setupInstanceDiscoveryStory} />,
  parameters: {
    ...appMeta.parameters,
    viewport: {
      options: {
        instanceDiscoveryLaptop: {
          name: "Laptop 1200",
          styles: {
            width: "1200px",
            height: "900px"
          },
          type: "desktop"
        }
      }
    },
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
    await expandInstanceList(canvasElement);
    const canvas = within(canvasElement);
    // Project context shows as the basename only; the full path would drown the row. ("mux" may
    // also appear in the workspace chrome, so count matches instead of requiring exactly one.)
    if (canvas.queryAllByText("mux").length === 0 || canvas.queryByText("api-docs") == null) {
      throw new Error("instance rows did not render their project basenames");
    }
    if (canvas.queryByText(/reconciliation-pipeline-with-an-extremely-long/) == null) {
      throw new Error("long project basename was dropped instead of truncated");
    }
    if (canvas.queryByText("self") == null || canvas.queryAllByText("unrelated").length !== 2) {
      throw new Error("instance rows did not render their relationships");
    }
    // Untitled instance rows fall back to their workspace name; titled rows keep only the title.
    if (canvas.queryByText("docs-sweep") == null || canvas.queryByText("release-cut") != null) {
      throw new Error("untitled instance row did not fall back to its workspace name");
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Desktop,
  globals: {
    viewport: {
      value: "instanceDiscoveryPhone",
      isRotated: false
    }
  },
  decorators: [PhoneDecorator],
  parameters: {
    ...appMeta.parameters,
    viewport: {
      options: {
        instanceDiscoveryPhone: {
          name: "Phone 390",
          styles: {
            width: \`\${PHONE_WIDTH}px\`,
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
  play: async context => {
    await Desktop.play?.(context);
    const frame = context.canvasElement.querySelector<HTMLElement>("[data-instance-discovery-phone-width]");
    if (!frame) throw new Error("phone frame decorator did not render");
    const frameRect = frame.getBoundingClientRect();
    if (frameRect.width !== PHONE_WIDTH) {
      throw new Error(\`phone frame is \${frameRect.width}px wide; expected \${PHONE_WIDTH}px — the story would snapshot the wrong layout\`);
    }
    // The desktop-sized test-runner retains the app's desktop minimum width; only the
    // manager/Pixel phone viewport activates its narrow media rules, so fit is asserted there.
    if (window.innerWidth <= NARROW_VIEWPORT_MAX_WIDTH_PX) {
      // The expanded details surface is the note's parent; every row lives inside it.
      const surface = within(frame).getByText(INSTANCE_LIST_RESULT.note).parentElement;
      if (!surface) throw new Error("task_list details surface did not render");
      // Right-edge containment rather than scrollWidth: ancestors clip overflow, which would
      // hide a too-wide badge or truncated span from scrollWidth-based checks.
      for (const element of surface.querySelectorAll<HTMLElement>("*")) {
        const right = element.getBoundingClientRect().right;
        if (right > frameRect.right + 1) {
          throw new Error(\`instance list content overflowed the \${PHONE_WIDTH}px frame by \${Math.round(right - frameRect.right)}px\`);
        }
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Phone-width contract for instance rows: the wrapping badge row (id, status, title, relationship,
project, activity) must stay inside a 390px transcript. Pinned to the Pixel phone viewport; the
fixed-width decorator keeps the frame narrow in the desktop-sized test-runner, and the
media-dependent fit assertion is guarded on the real viewport width.`,...s.parameters?.docs?.description}}};const se=["Desktop","Phone390"];export{o as Desktop,s as Phone390,se as __namedExportsOrder,ae as default};

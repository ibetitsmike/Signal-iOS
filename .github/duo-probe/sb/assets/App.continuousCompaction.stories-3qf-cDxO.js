import{j as a,i as x,c as v,k as r,S as s}from"./iframe-DS5VyXLs.js";import{a as d,A as E}from"./meta-BWzge-eA.js";import{s as B}from"./chatSetup-DJI_9Mbv.js";import{w as O}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";import"./git-Ekgdg9se.js";const{expect:o,within:S}=__STORYBOOK_MODULE_TEST__,et={...d,title:"App/ContinuousCompaction"},h="Keep the migration reversible and preserve the existing tests.",l="The latest changes and verification results remain in context.",w="Model-only continuation context.";function _(){v();const t=[r("summary","assistant","Earlier work: the migration is implemented.",{historySequence:10,timestamp:s-3e4,model:"google:gemini-3.1-flash-lite",compacted:!0,compactionBoundary:!0,compactionEpoch:3,muxMetadata:{type:"compaction-summary",strategy:"continuous"}}),r("tail-user","user",h,{historySequence:11,timestamp:s-2e4,synthetic:!0,uiVisible:!0}),r("tail-assistant","assistant",l,{historySequence:12,timestamp:s-1e4,synthetic:!0,uiVisible:!0,stepStartPartIndices:[0]}),r("hidden-context","user",w,{historySequence:13,timestamp:s,synthetic:!0})];return B({workspaceId:"ws-continuous-compaction",workspaceName:"continuous-compaction",messages:t.map(e=>({...e,type:"message"}))})}const n={render:()=>a.jsx(E,{setup:_}),play:async({canvasElement:t})=>{const e=S(t),m=await e.findByRole("separator",{name:"Continuous compaction #3"}),u=await e.findByText(h),g=await e.findByText(l);await o(e.queryByText(w)).not.toBeInTheDocument(),await o(m.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0),await o(u.compareDocumentPosition(g)&Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0),await O(t);const i=t.querySelector("[data-compaction-phone-width]");if(i){const y=Number(i.getAttribute("data-compaction-phone-width"));await o(i.getBoundingClientRect().width).toBe(y),window.innerWidth<=x&&await o(m.getBoundingClientRect().right).toBeLessThanOrEqual(i.getBoundingClientRect().right);const T=await e.findByText("compacted",{exact:!0});await o(T.getBoundingClientRect().right).toBeLessThanOrEqual(m.getBoundingClientRect().right)}}},p={...n,globals:{viewport:{value:"mobile1",isRotated:!1}},decorators:[t=>a.jsx("div",{"data-compaction-phone-width":"375",style:{width:375,height:667},children:a.jsx(t,{})})],parameters:{...d.parameters,pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}}},c={...n,globals:{viewport:{value:"continuousPhone",isRotated:!1}},decorators:[t=>a.jsx("div",{"data-compaction-phone-width":"390",style:{width:390,height:844},children:a.jsx(t,{})})],parameters:{...d.parameters,viewport:{options:{continuousPhone:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"}}},pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={setupContinuousCompactionStory} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const boundary = await canvas.findByRole("separator", {
      name: "Continuous compaction #3"
    });
    const request = await canvas.findByText(RECENT_REQUEST);
    const reply = await canvas.findByText(RECENT_REPLY);
    await expect(canvas.queryByText(HIDDEN_CONTEXT)).not.toBeInTheDocument();
    await expect(boundary.compareDocumentPosition(request) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    await expect(request.compareDocumentPosition(reply) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    await waitForScrollStabilization(canvasElement);

    // Fixed-width decorators keep this contract active in the desktop-sized test-runner too.
    const frame = canvasElement.querySelector("[data-compaction-phone-width]");
    if (frame) {
      const width = Number(frame.getAttribute("data-compaction-phone-width"));
      await expect(frame.getBoundingClientRect().width).toBe(width);
      // The desktop-sized test-runner retains the app's desktop minimum width;
      // only the manager/Pixel phone viewport activates its narrow media rules.
      if (window.innerWidth <= NARROW_VIEWPORT_MAX_WIDTH_PX) {
        await expect(boundary.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right);
      }
      // The label must fit the transcript even under the test-runner's desktop media rules.
      const badge = await canvas.findByText("compacted", {
        exact: true
      });
      await expect(badge.getBoundingClientRect().right).toBeLessThanOrEqual(boundary.getBoundingClientRect().right);
    }
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...PreservedTail,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  decorators: [Story => <div data-compaction-phone-width="375" style={{
    width: 375,
    height: 667
  }}>
        <Story />
      </div>],
  parameters: {
    ...appMeta.parameters,
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...PreservedTail,
  globals: {
    viewport: {
      value: "continuousPhone",
      isRotated: false
    }
  },
  decorators: [Story => <div data-compaction-phone-width="390" style={{
    width: 390,
    height: 844
  }}>
        <Story />
      </div>],
  parameters: {
    ...appMeta.parameters,
    viewport: {
      options: {
        continuousPhone: {
          name: "Phone 390",
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
  }
}`,...c.parameters?.docs?.source}}};const ot=["PreservedTail","Phone375","Phone390"];export{p as Phone375,c as Phone390,n as PreservedTail,ot as __namedExportsOrder,et as default};

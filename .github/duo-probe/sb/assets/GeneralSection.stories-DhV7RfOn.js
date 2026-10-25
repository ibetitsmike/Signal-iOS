import{j as n,cb as m,bB as h}from"./iframe-DpCW2UOM.js";import{l as g,P as y}from"./meta-BwRgvoZ6.js";import{G as r}from"./GeneralSection-D6xTNA0A.js";import{S as s,s as l}from"./settingsStoryUtils-D5wjZSky.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./terminalFontFamily-CKgAHiwn.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";const{expect:w,within:p}=__STORYBOOK_MODULE_TEST__,X={...g,title:"Settings/Sections/GeneralSection",component:r},i={render:()=>n.jsx(s,{setup:()=>l({}),children:n.jsx(r,{})}),play:async({canvasElement:t})=>{const e=p(t);await e.findByText(/^Theme$/i),await e.findByText(/^Terminal Font$/i),await e.findByText(/^Terminal Font Size$/i)}},a={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:y},render:()=>n.jsx(s,{setup:()=>l({}),children:n.jsx("div",{"data-testid":"phone-frame",style:{width:375,maxWidth:"100%"},children:n.jsx(r,{})})}),play:async({canvasElement:t})=>{const e=p(t),c=e.getByTestId("phone-frame").getBoundingClientRect(),d=await e.findByPlaceholderText(m.fontFamily);await w(d.getBoundingClientRect().right).toBeLessThanOrEqual(c.right)}},o={render:()=>n.jsx(s,{setup:()=>l({userPreferences:{appearance:{terminalBadgeConfig:{...h,enabled:!0}}}}),children:n.jsx(r,{})}),globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}},docs:{description:{story:"Pins the phone-width contract for the enabled badge settings rows (template/position/opacity/font size), which only render when the badge is on."}}},play:async({canvasElement:t})=>{const e=p(t);await e.findByLabelText("Terminal Badge Template"),await e.findByLabelText("Terminal Badge Opacity"),await e.findByLabelText("Terminal Badge Font Size")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({})}>
      <GeneralSection />
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(/^Theme$/i);
    await canvas.findByText(/^Terminal Font$/i);
    await canvas.findByText(/^Terminal Font Size$/i);
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => <SettingsSectionStory setup={() => setupSettingsStory({})}>
      <div data-testid="phone-frame" style={{
      width: 375,
      maxWidth: "100%"
    }}>
        <GeneralSection />
      </div>
    </SettingsSectionStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const frame = canvas.getByTestId("phone-frame").getBoundingClientRect();
    const input = await canvas.findByPlaceholderText(DEFAULT_TERMINAL_FONT_CONFIG.fontFamily);
    await expect(input.getBoundingClientRect().right).toBeLessThanOrEqual(frame.right);
  }
}`,...a.parameters?.docs?.source},description:{story:`Phone-width contract for the Terminal Font row (#5814): the row wraps, so the fixed-width
input moves below its label instead of running past the screen edge (#5813). A play only, no
Pixel snapshot. The fixed 375px frame makes the check hold in the CI test-runner too, which
ignores viewport globals (AGENTS.md).`,...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsSectionStory
  // Enabled so the enabled-only badge rows render; the phone Pixel snapshot guards their
  // narrow-width wrapping.
  setup={() => setupSettingsStory({
    userPreferences: {
      appearance: {
        terminalBadgeConfig: {
          ...DEFAULT_TERMINAL_BADGE_CONFIG,
          enabled: true
        }
      }
    }
  })}>
      <GeneralSection />
    </SettingsSectionStory>,
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
    },
    docs: {
      description: {
        story: "Pins the phone-width contract for the enabled badge settings rows (template/position/opacity/font size), which only render when the badge is on."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Static contract: the enabled-only rows must be present, otherwise the
    // phone snapshot would silently capture the collapsed (disabled) UI.
    await canvas.findByLabelText("Terminal Badge Template");
    await canvas.findByLabelText("Terminal Badge Opacity");
    await canvas.findByLabelText("Terminal Badge Font Size");
  }
}`,...o.parameters?.docs?.source}}};const K=["General","TerminalFontPhoneWidth","TerminalBadgeEnabledPhone"];export{i as General,o as TerminalBadgeEnabledPhone,a as TerminalFontPhoneWidth,K as __namedExportsOrder,X as default};

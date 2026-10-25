import{j as n,cb as m,bB as h}from"./iframe-DwmVy7SQ.js";import{l as g,P as y}from"./meta-CT6GdK4g.js";import{G as r}from"./GeneralSection-CS7kXI6v.js";import{S as s,s as l}from"./settingsStoryUtils-hSUed6f9.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./terminalFontFamily-CKgAHiwn.js";import"./workspaces-DVCSHIwS.js";import"./workspace-D5uypDf7.js";import"./orpc-sAt07-6s.js";import"./autoModelRouting-DEovgEig.js";const{expect:w,within:p}=__STORYBOOK_MODULE_TEST__,X={...g,title:"Settings/Sections/GeneralSection",component:r},i={render:()=>n.jsx(s,{setup:()=>l({}),children:n.jsx(r,{})}),play:async({canvasElement:t})=>{const e=p(t);await e.findByText(/^Theme$/i),await e.findByText(/^Terminal Font$/i),await e.findByText(/^Terminal Font Size$/i)}},a={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:y},render:()=>n.jsx(s,{setup:()=>l({}),children:n.jsx("div",{"data-testid":"phone-frame",style:{width:375,maxWidth:"100%"},children:n.jsx(r,{})})}),play:async({canvasElement:t})=>{const e=p(t),c=e.getByTestId("phone-frame").getBoundingClientRect(),d=await e.findByPlaceholderText(m.fontFamily);await w(d.getBoundingClientRect().right).toBeLessThanOrEqual(c.right)}},o={render:()=>n.jsx(s,{setup:()=>l({userPreferences:{appearance:{terminalBadgeConfig:{...h,enabled:!0}}}}),children:n.jsx(r,{})}),globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}},docs:{description:{story:"Pins the phone-width contract for the enabled badge settings rows (template/position/opacity/font size), which only render when the badge is on."}}},play:async({canvasElement:t})=>{const e=p(t);await e.findByLabelText("Terminal Badge Template"),await e.findByLabelText("Terminal Badge Opacity"),await e.findByLabelText("Terminal Badge Font Size")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

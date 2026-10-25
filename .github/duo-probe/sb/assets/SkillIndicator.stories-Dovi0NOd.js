import{j as i}from"./iframe-DS5VyXLs.js";import{l as h,P as p}from"./meta-BWzge-eA.js";import{S as n}from"./AIView-Bsvwuvut.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./ConfirmationModal-D10R7Urj.js";import"./sendDispatchModes-Coi3kdkT.js";import"./ToggleGroup-Cthcbmic.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./shell-DJ7G-zZU.js";import"./TimelinePanel-BhqA7Mw3.js";import"./timelineReveal-B9mUteaZ.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./slashCommandHints-BSKyjYjN.js";const{userEvent:m,waitFor:c,within:s}=__STORYBOOK_MODULE_TEST__,l="SSH connection to dev.example did not become healthy within 10000ms",W={...h,title:"App/Chat/Components/SkillIndicator",component:n,args:{loadedSkills:[],availableSkills:[{name:"my-company-style",description:"Company-wide coding style",scope:"global"},{name:"init",description:"Bootstrap an AGENTS.md file",scope:"built-in"}],unavailableSources:[{scope:"project",displayPath:"/home/coder/project/.xum/skills",message:l},{scope:"project",displayPath:"/home/coder/project/.agents/skills",message:l}]},render:e=>i.jsx("div",{className:"bg-background flex min-h-[360px] items-start justify-end p-6",children:i.jsx(n,{...e})}),play:async({canvasElement:e})=>{await m.click(await s(e).findByRole("button",{name:/unavailable source/i})),await c(()=>s(document.body).getByText("Unavailable sources"))}},a={parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["laptop"]}}}},t={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}}},d={availableSkills:[{name:"poteto-mode",displayName:"Poteto Mode",description:"Route work through the pstack skills",scope:"global"},{name:"init",description:"Bootstrap an AGENTS.md file",scope:"built-in"}],skillWarnings:[{directoryName:"poteto-mode",scope:"global",displayPath:"/home/coder/.xum/skills/poteto-mode/SKILL.md",message:"SKILL.md name 'Poteto Mode' is not the directory name, so Xum loads the skill as 'poteto-mode'.",hint:"Invoke it as /poteto-mode. Set name: poteto-mode to remove this warning."}],unavailableSources:[]},g=async({canvasElement:e})=>{await m.click(await s(e).findByRole("button",{name:/1 warning/i})),await c(()=>s(document.body).getByText("Skill warnings"))},o={args:d,play:g,parameters:{pixel:p}},r={args:d,play:g,globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:p}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["laptop"]
      }
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"The SSH host did not answer: global and built-in skills still list, project roots are named.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
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
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: DISPLAY_NAME_ARGS,
  play: openSkillWarnings,
  parameters: {
    pixel: PIXEL_DISABLED
  }
}`,...o.parameters?.docs?.source},description:{story:"A SKILL.md `name` that is not the directory name loads as a display name with a warning.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: DISPLAY_NAME_ARGS,
  play: openSkillWarnings,
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  }
}`,...r.parameters?.docs?.source}}};const U=["UnavailableProjectSources","UnavailableProjectSourcesPhone","DisplayNameWarning","DisplayNameWarningPhone"];export{o as DisplayNameWarning,r as DisplayNameWarningPhone,a as UnavailableProjectSources,t as UnavailableProjectSourcesPhone,U as __namedExportsOrder,W as default};

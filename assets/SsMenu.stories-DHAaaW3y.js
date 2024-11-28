import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{S as _,a as D}from"./SsMenu-D7Ge_tUo.js";import{S as s}from"./SsIcon-C8wfcyLa.js";import"./index-DJO9vBfz.js";const R=({permissions:m={read:!0,write:!0,delete:!0},children:T})=>e.jsx(_,{currentEnv:"dev",permissions:m,children:T});R.__docgenInfo={description:"",methods:[],displayName:"MockSsPermissionsProvider",props:{permissions:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"{ read: true, write: true, delete: true }",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const V={title:"Sushi Design/SsMenu",component:D,tags:["autodocs"],decorators:[m=>e.jsx(R,{children:e.jsx("div",{style:{padding:"20px",background:"#f5f5f5"},children:e.jsx(m,{})})})],argTypes:{display:{control:"boolean",description:"Toggle the display of the menu",defaultValue:!0},currentPath:{control:"text",description:"Current path of the application for active menu item highlighting"},menus:{control:"object",description:"List of menu items to render in the menu"}}},u=[{id:"1",display:"Dashboard",link:"#",icon:e.jsx(s,{className:"text-primary",name:"Speak",size:22}),child:[{id:"1-1",display:"Overview",link:"/dashboard/overview"},{id:"1-2",display:"Stats",link:"/dashboard/stats"}]},{id:"2",display:"Settings",link:"#",icon:e.jsx(s,{className:"text-primary",name:"Setting",size:22}),child:[{id:"2-1",display:"Profile",link:"/settings/profile"},{id:"2-2",display:"Account",link:"/settings/account"}]},{id:"3",display:"Logout",icon:e.jsx(s,{className:"text-primary",name:"Logout",size:22}),link:"#"}],d=m=>e.jsx("div",{className:"menu-panel ss-content",children:e.jsx(D,{...m})}),r=d.bind({});r.args={menus:u,currentPath:"/dashboard"};r.storyName="Default Menu";r.parameters={docs:{description:{story:"A default menu showcasing all items with icons and nested children."}}};const a=d.bind({});a.args={menus:u,currentPath:"/dashboard/overview"};a.storyName="Active Menu Item Highlighted";a.parameters={docs:{description:{story:"Highlights the active menu item based on the `currentPath`."}}};const t=d.bind({});t.args={menus:[{id:"1",display:"Home",link:"/home"},{id:"2",display:"Profile",link:"/profile"}],currentPath:"/home"};t.storyName="Menu Without Icons";t.parameters={docs:{description:{story:"A menu without icons, useful for minimalistic designs."}}};const n=d.bind({});n.args={menus:u,currentPath:"/dashboard",defaultExpand:!0};n.storyName="Menu with Default Expanded State";n.parameters={docs:{description:{story:"Displays the menu with all parent items expanded by default."}}};const i=d.bind({});i.args={menus:[{id:"1",icon:e.jsx(s,{className:"text-primary",name:"Home",size:22}),display:"Home",link:"/home"},{id:"2",icon:e.jsx(s,{className:"text-primary",name:"Profile",size:22}),display:"Profile",link:"/profile"}],currentPath:"/home"};i.storyName="Menu with Icons Only";i.parameters={docs:{description:{story:"A menu with icons for each item, useful for compact layouts."}}};const o=d.bind({});o.args={menus:u};o.storyName="Hidden Menu";o.parameters={docs:{description:{story:"A menu that is hidden by setting the `display` prop to `false`."}}};const c=d.bind({});c.args={menus:[{id:"1",icon:e.jsx(s,{className:"text-primary",name:"Home",size:22}),display:"Home",link:"/home",envs:["dev"]},{id:"2",icon:e.jsx(s,{className:"text-primary",name:"Profile",size:22}),display:"Profile",link:"/profile",envs:["prod"]},{id:"3",icon:e.jsx(s,{className:"text-primary",name:"Settings",size:22}),display:"Settings",link:"/settings",envs:["dev","uat"]}],currentPath:"/home"};c.storyName="Environment-Specific Menu";c.parameters={docs:{description:{story:"Demonstrates menu visibility based on the `envs` property. Items are filtered by the current environment."}}};var p,l,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var g,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,x,M;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>`,...(M=(x=t.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var S,N,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>`,...(b=(N=n.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var P,k,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,I,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>`,...(E=(I=o.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var H,z,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const C=["DefaultMenu","ActiveMenuItem","NoIconsMenu","ExpandedMenu","MenuWithIcons","HiddenMenu","EnvironmentSpecificMenu"];export{a as ActiveMenuItem,r as DefaultMenu,c as EnvironmentSpecificMenu,n as ExpandedMenu,o as HiddenMenu,i as MenuWithIcons,t as NoIconsMenu,C as __namedExportsOrder,V as default};
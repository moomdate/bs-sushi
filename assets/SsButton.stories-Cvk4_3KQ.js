import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{u as Y,a as Z,c as rr}from"./SsPagination-DNPZmJrO.js";import{r as ar}from"./index-DJO9vBfz.js";import{S as er}from"./SsIcon-C8wfcyLa.js";import"./SsMenu-D7Ge_tUo.js";import"./SsBody-RxA2DFEX.js";import"./SsFixedNav-ZJ66Yytq.js";import"./index-C1dzxQ9A.js";const k=ar.forwardRef(({as:u,bsPrefix:r,variant:y="primary",size:S,active:H=!1,disabled:l=!1,className:J,...p},K)=>{const g=Y(r,"btn"),[Q,{tagName:U}]=Z({tagName:u,disabled:l,...p}),X=U;return a.jsx(X,{...Q,...p,ref:K,disabled:l,className:rr(J,g,H&&"active",y&&`${g}-${y}`,S&&`${g}-${S}`,p.href&&l&&"disabled")})});k.displayName="Button";const A=({bgGradient:u=!0,...r})=>a.jsx(k,{...r,className:`${u?"bg-gradient":""} ${r.className||""}`,children:r.children});A.__docgenInfo={description:"",methods:[],displayName:"SsButton",props:{bgGradient:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["PropsWithChildren"]};const ur={title:"Sushi Design/SsButton",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"],table:{type:{summary:"string"},defaultValue:{summary:"md"}}},variant:{control:"radio",options:["primary","secondary","success","info","warning","danger"],table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},bgGradient:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},e={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},s={args:{variant:"success",children:"Success Button"}},o={args:{variant:"info",children:"Info Button"}},t={args:{variant:"warning",children:"Warning Button"}},c={args:{variant:"danger",children:"Danger Button"}},i={args:{variant:"primary",size:"lg",children:"Large Primary Button"}},m={args:{variant:"info",children:a.jsxs(a.Fragment,{children:[a.jsx(er,{size:18,name:"Document-1"})," Info With Icon"]})}},d={args:{variant:"secondary",size:"sm",children:"Small  Secondary Button"}};var f,h,B;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(B=(h=e.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var v,I,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(P=(I=n.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var b,x,W;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success Button'
  }
}`,...(W=(x=s.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var N,D,j;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info Button'
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var z,$,w;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning Button'
  }
}`,...(w=($=t.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var L,V,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var E,C,G;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Primary Button'
  }
}`,...(G=(C=i.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var M,R,T;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: <><SsIcon size={18} name={'Document-1'} /> Info With Icon</>
  }
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,F,O;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Small  Secondary Button'
  }
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const lr=["Primary","Secondary","Success","Info","Warning","Danger","LargePrimary","MediumWithIcon","SmallSecondary"];export{c as Danger,o as Info,i as LargePrimary,m as MediumWithIcon,e as Primary,n as Secondary,d as SmallSecondary,s as Success,t as Warning,lr as __namedExportsOrder,ur as default};

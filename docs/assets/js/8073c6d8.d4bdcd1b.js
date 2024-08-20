"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[2128],{3636:(e,n,t)=>{t.d(n,{Iu:()=>l,yg:()=>h});var r=t(5668);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=p(t),y=a,h=c["".concat(s,".").concat(y)]||c[y]||d[y]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m[c]="string"==typeof e?e:a,i[1]=m;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=t(5307),a=(t(5668),t(3636));const o={},i="Typescript Support",m={unversionedId:"advanced-customization/typescript",id:"advanced-customization/typescript",title:"Typescript Support",description:"RJSF fully supports Typescript.",source:"@site/docs/advanced-customization/typescript.md",sourceDirName:"advanced-customization",slug:"/advanced-customization/typescript",permalink:"/react-jsonschema-form/docs/advanced-customization/typescript",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/advanced-customization/typescript.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Internals",permalink:"/react-jsonschema-form/docs/advanced-customization/internals"},next:{title:"API Reference",permalink:"/react-jsonschema-form/docs/api-reference/"}},s={},p=[{value:"Overriding generics",id:"overriding-generics",level:2},{value:"T",id:"t",level:3},{value:"S",id:"s",level:3},{value:"F",id:"f",level:3},{value:"Overriding generics in core",id:"overriding-generics-in-core",level:2},{value:"Overriding generics in other themes",id:"overriding-generics-in-other-themes",level:2},{value:"Overriding a Theme",id:"overriding-a-theme",level:3}],l={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.c)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"typescript-support"},"Typescript Support"),(0,a.yg)("p",null,"RJSF fully supports Typescript.\nThe ",(0,a.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/api-reference/utility-functions"},"types and functions")," exported by ",(0,a.yg)("inlineCode",{parentName:"p"},"@rjsf/utils")," are fully typed (as needed) using one or more of the following 3 optional generics:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"T = any"),": This represents the type of the ",(0,a.yg)("inlineCode",{parentName:"li"},"formData")," and defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"any"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"S extends StrictRJSFSchema = RJSFSchema"),": This represents the type of the ",(0,a.yg)("inlineCode",{parentName:"li"},"schema")," and extends the ",(0,a.yg)("inlineCode",{parentName:"li"},"StrictRJSFSchema")," type and defaults to the ",(0,a.yg)("inlineCode",{parentName:"li"},"RJSFSchema")," type."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"F extends FormContextType = any"),": This represents the type of the ",(0,a.yg)("inlineCode",{parentName:"li"},"formContext"),", extends the ",(0,a.yg)("inlineCode",{parentName:"li"},"FormContextType")," type and defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"any"),".")),(0,a.yg)("p",null,"Every other library in the ",(0,a.yg)("inlineCode",{parentName:"p"},"@rjsf/*")," ecosystem use these same generics in their functions and React component definitions.\nFor instance, in the ",(0,a.yg)("inlineCode",{parentName:"p"},"@rjsf/core")," library the definitions of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Form")," component and the ",(0,a.yg)("inlineCode",{parentName:"p"},"withTheme()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"getDefaultRegistry()")," functions are as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export default class Form<\n  T = any,\n  S extends StrictRJSFSchema = RJSFSchema,\n  F extends FormContextType = any\n> extends Component<FormProps<T, S, F>, FormState<T, S, F>> {\n  // ... class implementation\n}\n\nexport default function withTheme<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(\n  themeProps: ThemeProps<T, S, F>\n) {\n  // ... function implementation\n}\n\nexport default function getDefaultRegistry<\n  T = any,\n  S extends StrictRJSFSchema = RJSFSchema,\n  F extends FormContextType = any\n>(): Omit<Registry<T, S, F>, 'schemaUtils'> {\n  // ... function implementation\n}\n")),(0,a.yg)("p",null,"Out of the box, the defaults for these generics will work for all use-cases.\nProviding custom types for any of these generics may be useful for situations where the caller is working with typed ",(0,a.yg)("inlineCode",{parentName:"p"},"formData"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"formContext")," props, Typescript is complaining and type casting isn't allowed."),(0,a.yg)("h2",{id:"overriding-generics"},"Overriding generics"),(0,a.yg)("h3",{id:"t"},"T"),(0,a.yg)("p",null,"The generic ",(0,a.yg)("inlineCode",{parentName:"p"},"T")," is used to represent the type of the ",(0,a.yg)("inlineCode",{parentName:"p"},"formData")," property passed into ",(0,a.yg)("inlineCode",{parentName:"p"},"Form"),".\nIf you are working with a simple, unchanging JSON Schema and you have defined a type for the ",(0,a.yg)("inlineCode",{parentName:"p"},"formData")," you are working with, you can override this generic as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport { customizeValidator } from '@rjsf/validator-ajv8';\nimport { Form } from '@rjsf/core';\n\ninterface FormData {\n  foo?: string;\n  bar?: number;\n}\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  properties: {\n    foo: { type: 'string' },\n    bar: { type: 'number' },\n  },\n};\n\nconst formData: FormData = {};\n\nconst validator = customizeValidator<FormData>();\n\nrender(<Form<FormData> schema={schema} validator={validator} formData={formData} />, document.getElementById('app'));\n")),(0,a.yg)("h3",{id:"s"},"S"),(0,a.yg)("p",null,"The generic ",(0,a.yg)("inlineCode",{parentName:"p"},"S")," is used to represent the type of the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," property passed into ",(0,a.yg)("inlineCode",{parentName:"p"},"Form"),".\nIf you are using something like the ",(0,a.yg)("a",{parentName:"p",href:"https://ajv.js.org/guide/typescript.html#utility-types-for-schemas"},"Ajv utility types for schemas")," typing system, you can override this generic as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { JSONSchemaType } from 'ajv';\nimport { RJSFSchema } from '@rjsf/utils';\nimport { customizeValidator } from '@rjsf/validator-ajv8';\nimport { Form } from '@rjsf/core';\n\ninterface FormData {\n  foo?: string;\n  bar?: number;\n}\n\ntype MySchema = JSONSchemaType<FormData>;\n\nconst schema: MySchema = {\n  type: 'object',\n  properties: {\n    foo: { type: 'string' },\n    bar: { type: 'number' },\n  },\n};\n\nconst validator = customizeValidator<any, MySchema>();\n\nrender(<Form<any, MySchema> schema={schema} validator={validator} />, document.getElementById('app'));\n\n// Alternatively since you have the type, you could also use this\n// const validator = customizeValidator<FormData, MySchema>();\n// render((\n//  <Form<FormData, MySchema> schema={schema} validator={validator} />\n//), document.getElementById(\"app\"));\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"NOTE: using this ",(0,a.yg)("inlineCode",{parentName:"p"},"Ajv typing system")," has not been tested extensively with RJSF, so use carefully")),(0,a.yg)("h3",{id:"f"},"F"),(0,a.yg)("p",null,"The generic ",(0,a.yg)("inlineCode",{parentName:"p"},"F")," is used to represent the type of the ",(0,a.yg)("inlineCode",{parentName:"p"},"formContext")," property passed into ",(0,a.yg)("inlineCode",{parentName:"p"},"Form"),".\nIf you have a type for this data, you can override this generic as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport { customizeValidator } from '@rjsf/validator-ajv8';\nimport { Form } from '@rjsf/core';\n\ninterface FormContext {\n  myCustomWidgetData: object;\n}\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  properties: {\n    foo: { type: 'string' },\n    bar: { type: 'number' },\n  },\n};\n\nconst formContext: FormContext = {\n  myCustomWidgetData: {\n    enableCustomFeature: true,\n  },\n};\n\nconst validator = customizeValidator<any, RJSFSchema, FormContext>();\n\nrender(\n  <Form<any, RJSFSchema, FormContext> schema={schema} validator={validator} formContext={formContext} />,\n  document.getElementById('app')\n);\n")),(0,a.yg)("h2",{id:"overriding-generics-in-core"},"Overriding generics in core"),(0,a.yg)("p",null,"As shown in previous examples, overriding the default ",(0,a.yg)("inlineCode",{parentName:"p"},"Form")," from ",(0,a.yg)("inlineCode",{parentName:"p"},"@rjsf/core")," is pretty straight forward.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"withTheme()")," function is just as easy:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport { customizeValidator } from '@rjsf/validator-ajv8';\nimport { withTheme, ThemeProps } from '@rjsf/core';\n\ninterface FormData {\n  foo?: string;\n  bar?: number;\n}\n\ntype MySchema = JSONSchemaType<FormData>;\n\nconst schema: MySchema = {\n  type: 'object',\n  properties: {\n    foo: { type: 'string' },\n    bar: { type: 'number' },\n  },\n};\n\ninterface FormContext {\n  myCustomWidgetData: object;\n}\n\nconst theme: ThemeProps<FormData, MySchema, FormContext> = {\n  widgets: { test: () => <div>test</div> },\n};\n\nconst ThemedForm = withTheme<FormData, MySchema, FormContext>(theme);\n\nconst validator = customizeValidator<FormData, MySchema, FormContext>();\n\nconst Demo = () => <ThemedForm schema={schema} uiSchema={uiSchema} validator={validator} />;\n")),(0,a.yg)("h2",{id:"overriding-generics-in-other-themes"},"Overriding generics in other themes"),(0,a.yg)("p",null,"Since all the other themes in RJSF are extensions of ",(0,a.yg)("inlineCode",{parentName:"p"},"@rjsf/core"),", overriding parts of these themes with custom generics is a little different.\nThe exported ",(0,a.yg)("inlineCode",{parentName:"p"},"Theme")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Form")," from any of the themes have been created using the generic defaults, and as a result, do not take generics themselves.\nIn order to override generics, special ",(0,a.yg)("inlineCode",{parentName:"p"},"generateForm()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"generateTheme()")," functions are exported for your use."),(0,a.yg)("h3",{id:"overriding-a-theme"},"Overriding a Theme"),(0,a.yg)("p",null,"If you are doing something like the following to create a new theme based on ",(0,a.yg)("inlineCode",{parentName:"p"},"@rjsf/mui")," to extend one or more ",(0,a.yg)("inlineCode",{parentName:"p"},"templates"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { WidgetProps } from '@rjsf/utils';\nimport { ThemeProps, withTheme } from '@rjsf/core';\nimport validator from '@rjsf/validator-ajv8';\nimport { Theme } from '@rjsf/mui';\n\nconst OldBaseInputTemplate = Theme.templates.BaseInputTemplate;\n\n// Force the underlying `TextField` component to always use size=\"small\"\nfunction MyBaseInputTemplate(props: WidgetProps) {\n  return <OldBaseInputTemplate {...props} size='small' />;\n}\n\nconst myTheme: ThemeProps = {\n  ...Theme,\n  templates: {\n    ...Theme.templates,\n    BaseInputTemplate: MyBaseInputTemplate,\n  },\n};\n\nconst ThemedForm = withTheme(myTheme);\n\nconst Demo = () => <ThemedForm schema={schema} uiSchema={uiSchema} validator={validator} />;\n")),(0,a.yg)("p",null,"Then you would use the new ",(0,a.yg)("inlineCode",{parentName:"p"},"generateTheme()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"generateForm()")," functions as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { WidgetProps } from '@rjsf/utils';\nimport { ThemeProps, withTheme } from '@rjsf/core';\nimport { customizeValidator } from '@rjsf/validator-ajv8';\nimport { generateTheme } from '@rjsf/mui';\n\ninterface FormData {\n  foo?: string;\n  bar?: number;\n}\n\ntype MySchema = JSONSchemaType<FormData>;\n\nconst schema: MySchema = {\n  type: 'object',\n  properties: {\n    foo: { type: 'string' },\n    bar: { type: 'number' },\n  },\n};\n\ninterface FormContext {\n  myCustomWidgetData: object;\n}\n\nconst Theme: ThemeProps<FormData, MySchema, FormContext> = generateTheme<FormData, MySchema, FormContext>();\n\nconst OldBaseInputTemplate = Theme.templates.BaseInputTemplate;\n\n// Force the underlying `TextField` component to always use size=\"small\"\nfunction MyBaseInputTemplate(props: WidgetProps<FormData, MySchema, FormContext>) {\n  return <OldBaseInputTemplate {...props} size='small' />;\n}\n\nconst myTheme: ThemeProps<FormData, MySchema, FormContext> = {\n  ...Theme,\n  templates: {\n    ...Theme.templates,\n    BaseInputTemplate: MyBaseInputTemplate,\n  },\n};\n\nconst ThemedForm = withTheme<FormData, MySchema, FormContext>(myTheme);\n\nconst validator = customizeValidator<FormData, MySchema, FormContext>();\n\n// You could also do since they are effectively the same:\n// const ThemedForm = generateForm<FormData, MySchema, FormContext>(myTheme);\n\nconst Demo = () => <ThemedForm schema={schema} uiSchema={uiSchema} validator={validator} />;\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"NOTE: The same approach works for extending ",(0,a.yg)("inlineCode",{parentName:"p"},"widgets")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"fields")," as well.")))}d.isMDXComponent=!0}}]);
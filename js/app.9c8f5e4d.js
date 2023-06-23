(function(){"use strict";var e={7095:function(e,t,s){var a=s(9242),l=s(3396);function i(e,t){const s=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(s)}var o=s(89);const n={},r=(0,o.Z)(n,[["render",i]]);var d=r,c=s(2483),p=s(7139);const u=e=>((0,l.dD)("data-v-de19b44c"),e=e(),(0,l.Cn)(),e),h=u((()=>(0,l._)("h1",null,"Список задач",-1))),k={key:0,class:"home"},m={key:0},g={key:1},f={class:"block__text-td"},_=["onUpdate:modelValue","onChange","id"],w=["for"],v={class:"btn-section"},b=["onClick"],y=["onClick"];function T(e,t,s,i,o,n){const r=(0,l.up)("router-link"),d=(0,l.up)("form-create-task");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("nav",null,[(0,l.Wm)(r,{to:{name:"filterTask"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Фильтр ➔")])),_:1})]),h,(0,l.Wm)(a.uT,null,{default:(0,l.w5)((()=>[e.isVisible?((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(d,{ref:"component",isShowForm:o.formVisible,state:o.state,onGetOpenForm:n.getDataForm,onCrateTask:n.crateTask,onUpdatedTask:n.updatedTasks},null,8,["isShowForm","state","onGetOpenForm","onCrateTask","onUpdatedTask"]),0===e.allTask.length?((0,l.wg)(),(0,l.iD)("h1",m,"пуст")):((0,l.wg)(),(0,l.iD)("table",g,[(0,l._)("tr",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.titleTask,(e=>((0,l.wg)(),(0,l.iD)("th",null,(0,p.zw)(e),1)))),256))]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.allTask,((t,s)=>((0,l.wg)(),(0,l.iD)("tr",{class:(0,p.C_)([{completed:t.completed},"block__text"]),key:t.id},[(0,l._)("td",null,(0,p.zw)(t.title),1),(0,l._)("td",f,(0,p.zw)(t.description),1),(0,l._)("td",null,(0,p.zw)(t.date),1),(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e=>t.completed=e,class:"checkbox",type:"checkbox",onChange:e=>n.updatedTasks(t),id:s},null,40,_),[[a.e8,t.completed]]),(0,l._)("label",{for:s},(0,p.zw)(t.completed?"выполнено":"не выполнено"),9,w)]),(0,l._)("td",v,[(0,l._)("button",{onClick:s=>{n.openForm(!1),e.$refs.component.changeUser(t)},class:"btn__change"},"Изменить",8,b),(0,l._)("button",{onClick:e=>n.deleteTask(t),class:"btn__delete"},"Удалить",8,y)])],2)))),128))])),(0,l._)("button",{onClick:t[0]||(t[0]=e=>n.openForm(!0)),class:"btn__add"},"Добавить")])):(0,l.kq)("",!0)])),_:1})],64)}const D=e=>((0,l.dD)("data-v-d9d2c8b2"),e=e(),(0,l.Cn)(),e),P={class:"modal-dialog"},Y={class:"modal-content"},C={class:"modal-header"},F={class:"modal-title"},V={class:"modal-body"},x=D((()=>(0,l._)("p",{class:"modal-text"},"Название",-1))),O={key:0,class:"error-text"},U=D((()=>(0,l._)("p",null,"Описание",-1))),S={key:1},$=D((()=>(0,l._)("p",null,"Телефон",-1))),j={key:0,class:"error-text",style:{color:"red"}},z={key:2,class:"modal-radio"},G=D((()=>(0,l._)("p",null,"Статус задачи",-1))),A=D((()=>(0,l._)("label",{for:"completed"},"Выполнено",-1))),H=D((()=>(0,l._)("label",{for:"notCompleted"},"Не выполнено",-1))),q={class:"container-btn"};function I(e,t,s,i,o,n){return(0,l.wg)(),(0,l.iD)("div",{class:(0,p.C_)([{"modal-visible":s.isShowForm},"modal"])},[(0,l._)("div",P,[(0,l._)("div",Y,[(0,l._)("div",C,[(0,l._)("h3",F,(0,p.zw)(s.state?"Форма создания":"Форма изменения"),1),(0,l._)("a",{onClick:t[0]||(t[0]=(...e)=>n.closeForm&&n.closeForm(...e)),class:"close"},"×")]),(0,l._)("div",V,[x,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.task.title=e),placeholder:"Введите название",type:"text"},null,512),[[a.nr,o.task.title]]),o.error?((0,l.wg)(),(0,l.iD)("p",O,"Поле является обязательным")):(0,l.kq)("",!0),U,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.task.description=e),placeholder:"Введите описание",type:"text"},null,512),[[a.nr,o.task.description]]),s.state?((0,l.wg)(),(0,l.iD)("div",S,[$,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>o.phone=e),onInput:t[4]||(t[4]=(...e)=>n.validatePhone&&n.validatePhone(...e)),placeholder:"Введите телефон"},null,544),[[a.nr,o.phone]]),o.invalidPhone?((0,l.wg)(),(0,l.iD)("p",j,"Некорректный номер телефона")):(0,l.kq)("",!0)])):(0,l.kq)("",!0),s.state?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",z,[G,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>o.task.completed=e),value:!0,class:"radio",type:"radio",id:"completed"},null,512),[[a.G2,o.task.completed]]),A,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>o.task.completed=e),class:"radio",type:"radio",value:!1,id:"notCompleted"},null,512),[[a.G2,o.task.completed]]),H])),(0,l._)("div",q,[(0,l._)("button",{onClick:t[7]||(t[7]=e=>n.checkValidation())},(0,p.zw)(s.state?"Создать":"Изменить"),1)])])])])],2)}var W={name:"formCreateTask",props:{isShowForm:Boolean,state:Boolean},data(){return{task:{title:"",description:"",completed:!1},error:!1,phone:"",invalidPhone:!1}},methods:{closeForm(){this.$emit("getOpenForm",!1),this.task.title="",this.task.description=""},checkValidation(){this.task.title?this.createTask():this.error=!0},createTask(){this.state&&this.$emit("crateTask",this.task),this.state||this.$emit("updatedTask",this.task),this.closeForm()},changeUser(e){this.task.id=e.id,this.task.title=e.title,this.task.description=e.description,this.task.completed=e.completed},validatePhone(){const e=this.phone.replace(/\D/g,"");if(5===e.length){const t=e.replace(/^(\d{3})(\d{2})$/,"$1-$2");this.phone=t,this.invalidPhone=!1}else this.invalidPhone=!0}}};const E=(0,o.Z)(W,[["render",I],["__scopeId","data-v-d9d2c8b2"]]);var K=E,Z={data(){return{titleTask:["Название","Описание","Дата создания","Статус"],allTask:null,isVisible:!1}},methods:{async getAllTask(){await fetch("http://localhost:3000/tasks",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{localStorage.setItem("cachedData",JSON.stringify(e)),this.processData(e)})).catch((e=>{console.error("Ошибка при получении данных:",e);const t=localStorage.getItem("cachedData");if(t){const e=JSON.parse(t);this.processData(e)}else{const e=[{id:1,title:"Задача ",description:"Подробное описание задачи 1",date:"12.06.2020",completed:!1},{id:2,title:"Задача 2",description:"Подробное описание задачи 2",date:"14.05.2020",completed:!0},{id:3,title:"Задача 3",description:"Подробное описание задачи 3",date:"25.01.2021",completed:!1},{id:4,title:"Задача 4",description:"Подробное описание задачи 4",date:"18.03.2021",completed:!0},{id:5,title:"Задача 5",description:"Подробное описание задачи 5",date:"11.08.2022",completed:!1},{id:6,title:"Задача 6",description:"Подробное описание задачи 6",date:"31.01.2022",completed:!0}];this.processData(e)}}))},processData(e){this.allTask=e,this.isVisible=!0},getYear(e){return e.date.split(".").splice(2,1).join(" ")}}},B={mixins:[Z],name:"HomeView",components:{FormCreateTask:K},data(){return{formVisible:!1,state:null}},methods:{openForm(e){this.formVisible=!0,this.state=e},getDataForm(e){this.formVisible=e},async crateTask(e){let t=new Date;await fetch("http://localhost:3000/tasks",{body:JSON.stringify({id:Math.max.apply(this.allTask.map((e=>e))),title:e.title,description:e.description,date:`${this.checkDate(t.getDate())}.${this.checkDate(t.getMonth()+1)}.${t.getFullYear()}`,completed:!1}),headers:{"Content-Type":"application/json"},method:"POST"}),await this.getAllTask()},checkDate(e){return+e<10?"0"+e:e},async deleteTask(e){await fetch(`http://localhost:3000/tasks/${e.id}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),await this.getAllTask()},async updatedTasks(e){await fetch(`http://localhost:3000/tasks/${e.id}`,{headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.title,description:e.description,completed:e.completed}),method:"PATCH"}),await this.getAllTask()}},async mounted(){await this.getAllTask()}};const J=(0,o.Z)(B,[["render",T],["__scopeId","data-v-de19b44c"]]);var M=J;const N={class:"container"},L={key:0,class:"section-table"},Q={key:0},R={key:1},X={class:"block__text-td"};function ee(e,t,s,i,o,n){const r=(0,l.up)("router-link"),d=(0,l.up)("filter-block");return(0,l.wg)(),(0,l.iD)("article",N,[(0,l._)("nav",null,[(0,l.Wm)(r,{to:{name:"home"}},{default:(0,l.w5)((()=>[(0,l.Uk)("🠔 На главную страницу")])),_:1})]),(0,l.Wm)(d,{onGetProgress:n.getProgress,onSelectYear:n.selectYear},null,8,["onGetProgress","onSelectYear"]),(0,l.Wm)(a.uT,null,{default:(0,l.w5)((()=>[e.isVisible?((0,l.wg)(),(0,l.iD)("section",L,[0===e.allTask.length?((0,l.wg)(),(0,l.iD)("h3",Q,[(0,l.Uk)("Список задач пуст, добавьте их "),(0,l.Wm)(r,{style:{color:"blue"},to:{name:"home"}},{default:(0,l.w5)((()=>[(0,l.Uk)("на главной странице")])),_:1})])):((0,l.wg)(),(0,l.iD)("table",R,[(0,l._)("tr",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.titleTask.slice(0,3),(e=>((0,l.wg)(),(0,l.iD)("th",null,(0,p.zw)(e),1)))),256))]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.taskFiltering,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,p.zw)(e.title),1),(0,l._)("td",X,(0,p.zw)(e.description),1),(0,l._)("td",null,(0,p.zw)(e.date),1)])))),128))]))])):(0,l.kq)("",!0)])),_:1})])}const te=e=>((0,l.dD)("data-v-78613db1"),e=e(),(0,l.Cn)(),e),se={class:"section-filters"},ae=te((()=>(0,l._)("h2",null,"Фильтрация",-1))),le={key:0,class:"block-filters"},ie={class:"block-select"},oe=te((()=>(0,l._)("h3",null,"Выберете год",-1))),ne=te((()=>(0,l._)("h3",null,"Выберете статус задачи",-1))),re={class:"block-input"},de={class:"block-input__radio"},ce=te((()=>(0,l._)("label",{for:"all"},"Все задачи",-1))),pe={class:"block-input__radio"},ue=te((()=>(0,l._)("label",{for:"completed"},"Выполненные",-1))),he={class:"block-input__radio"},ke=te((()=>(0,l._)("label",{for:"noCompleted"},"Не выполненные",-1)));function me(e,t,s,i,o,n){return(0,l.wg)(),(0,l.iD)("section",se,[(0,l._)("div",null,[ae,e.isVisible?((0,l.wg)(),(0,l.iD)("div",le,[(0,l._)("div",ie,[oe,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedYears=e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.getYears,(e=>((0,l.wg)(),(0,l.iD)("option",null,(0,p.zw)(e),1)))),256))],512),[[a.bM,n.selectedYears]])]),ne,(0,l._)("div",re,[(0,l._)("div",de,[(0,l.wy)((0,l._)("input",{id:"all",name:"radio",value:"all",type:"radio",class:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>n.pickedProgress=e)},null,512),[[a.G2,n.pickedProgress]]),ce]),(0,l._)("div",pe,[(0,l.wy)((0,l._)("input",{id:"completed",name:"radio",value:!0,type:"radio",class:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>n.pickedProgress=e)},null,512),[[a.G2,n.pickedProgress]]),ue]),(0,l._)("div",he,[(0,l.wy)((0,l._)("input",{id:"noCompleted",value:!1,name:"radio",type:"radio",class:"radio","onUpdate:modelValue":t[3]||(t[3]=e=>n.pickedProgress=e)},null,512),[[a.G2,n.pickedProgress]]),ke])])])):(0,l.kq)("",!0)])])}var ge={mixins:[Z],name:"filterBlock",props:{},data(){return{}},computed:{pickedProgress:{get(){return this.pickedProgress="all"},set(e){this.$emit("getProgress",e)}},selectedYears:{get(){return this.selectedYears="Все"},set(e){this.$emit("selectYear",e)}},getYears(){let e="Все",t=this.allTask.reduce(((e,t)=>e.includes(this.getYear(t))?e:[...e,this.getYear(t)]),[]);return t.sort().unshift(e),t}},async mounted(){await this.getAllTask()}};const fe=(0,o.Z)(ge,[["render",me],["__scopeId","data-v-78613db1"]]);var _e=fe,we={components:{FilterBlock:_e},mixins:[Z],name:"FilterTaskView",data(){return{isFiltersShow:!1,pickedProgress:"all",selectedYears:"Все",filteredTasks:null}},methods:{getProgress(e){this.pickedProgress=e},selectYear(e){this.selectedYears=e}},computed:{taskFiltering(){return"all"===this.pickedProgress&&"Все"===this.selectedYears?this.filteredTasks=this.allTask:"all"!==this.pickedProgress&&"Все"===this.selectedYears?this.filteredTasks=this.allTask.filter((e=>e.completed===this.pickedProgress)):"all"===this.pickedProgress&&"Все"!==this.selectedYears?this.filteredTasks=this.allTask.filter((e=>this.getYear(e)===this.selectedYears)):"all"!==this.pickedProgress&&"Все"!==this.selectedYears&&(this.filteredTasks=this.allTask.filter((e=>e.completed===this.pickedProgress)),this.filteredTasks=this.filteredTasks.filter((e=>this.getYear(e)===this.selectedYears))),this.filteredTasks}},async mounted(){await this.getAllTask()}};const ve=(0,o.Z)(we,[["render",ee],["__scopeId","data-v-053aef66"]]);var be=ve;const ye=[{path:"/",name:"home",component:M},{path:"/filter",name:"filterTask",component:be}],Te=(0,c.p7)({history:(0,c.PO)("/task-application/"),routes:ye});var De=Te;(0,a.ri)(d).use(De).mount("#app")}},t={};function s(a){var l=t[a];if(void 0!==l)return l.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,a,l,i){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],l=e[c][1],i=e[c][2];for(var n=!0,r=0;r<a.length;r++)(!1&i||o>=i)&&Object.keys(s.O).every((function(e){return s.O[e](a[r])}))?a.splice(r--,1):(n=!1,i<o&&(o=i));if(n){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,l,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,i,o=a[0],n=a[1],r=a[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(l in n)s.o(n,l)&&(s.m[l]=n[l]);if(r)var c=r(s)}for(t&&t(a);d<o.length;d++)i=o[d],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},a=self["webpackChunktest_vue_srspase"]=self["webpackChunktest_vue_srspase"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(7095)}));a=s.O(a)})();
//# sourceMappingURL=app.9c8f5e4d.js.map
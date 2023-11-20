class Project {
    static formContext: Xrm.Jpc_project;
    static onLoad(executionContext: Xrm.Events.EventContext) {
        this.formContext = executionContext.getFormContext();

        let desc: any = this.formContext.getAttribute("jpc_name")?.getValue()?.toString();
        console.log("project");
    }
}

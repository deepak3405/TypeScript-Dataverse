class Project {
  static formContext: Xrm.Jpc_project;

  static async onLoad(executionContext: Xrm.Events.EventContext) {
    this.formContext = executionContext.getFormContext();

    let desc: any = this.formContext.getAttribute("jpc_name")?.getValue()?.toString();

    console.log("project");

    let resposnse: any = await Xrm.WebApi.retrieveMultipleRecords("jpc_project");
  }
}

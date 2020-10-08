module.exports = async function (context, req) {
    context.log('Get a task to the planner');

    const gtasks=[{
        "id":"123",
        "description":"Implement Login View",
        "status": "In progress",
        "dueDate":"12/05/2019",
        "responsible":"Sarah Vieda"
    },
    {
        "id":"124",
        "description":"Implement Login Controller",
        "status": "Ready",
        "dueDate":"12/05/2019",
        "responsible":"Sarah Vieda"
    },
    {
        "id":"125",
        "description":"Facebook Integration",
        "status": "Completed",
        "dueDate":"12/05/2019",
        "responsible":"Sarah Vieda"
    }];

    context.res = {
        status: 200,
        body: gtasks,
    };
   
}

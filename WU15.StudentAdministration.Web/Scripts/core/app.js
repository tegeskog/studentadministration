
// http://www.asp.net/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api
// http://techbrij.com/pass-parameters-aspdotnet-webapi-jquery

// *** http://www.matlus.com/cross-domain-restful-crud-operations-using-jquery/ ***

// http://www.matlus.com/as-net-web-api-supporting-restful-crud-operations/
// http://www.allenconway.net/2014/01/http-error-405-when-making-put-or.html
// http://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api
// http://www.hanselman.com/blog/HTTPPUTOrDELETENotAllowedUseXHTTPMethodOverrideForYourRESTServiceWithASPNETWebAPI.aspx

// http://ironsummitmedia.github.io/startbootstrap-3-col-portfolio/
// http://www.asp.net/mvc/overview/getting-started/recommended-resources-for-mvc#best

// http://handlebarsjs.com/
// http://mustache.github.io/
// http://twitter.github.io/hogan.js/



$("#courseForm").submit(function (e) {
    // Utility
    var postData = $(this).serializeArray();
    var result = {};
    $.each(postData, function () {
        result[this.name] = this.value;
    });
    // Utility

    // AdminManager
    var formUrl = $(this).attr("action");
    //formUrl = "http://api.wu15.se/api/courses/";

    $.ajax(
    {
        url: formUrl,
        type: "POST",
        data: JSON.stringify(result),
        contentType: "application/json",
        success: function (data, textStatus, jqXHR) {
            alert(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
    // AdminManager

    e.preventDefault();
});


var url = "http://localhost:45959/api/courses/";
//url = "http://api.wu15.se/api/courses/";

$("#list").click(function () {
    $.ajax({
        type: "GET",
        url: url,
        data: {sid: "1"}
    }).done(function (data) {
        console.log(data);
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText || textStatus);
    });
});

$("#item").click(function () {
    var id = $("#id").val();
    console.log("Fetching item having id: " + id);

    $.ajax({
        type: "GET",
        url: url + id
    }).done(function (data) {
        console.log(data);
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText || textStatus);
    });
});

$("#post").click(function () {
    var id = "";
    var name = "";
    var points = 0;


    $.ajax({
        type: "POST",
        url: url,
        schoolId: "sid=c08bdab7-ed3d-4048-8338-d4f14f2770a8",
        data: JSON.stringify(
        {
            id: 1234,
            name: "Kurs 100",
            schoolNo: "c08bdab7-ed3d-4048-8338-d4f14f2770a8",
            students: [
            {
                id: 1,
                firstName: "Kalle",
                lastName: "Kula"
            },
            {
                id: 2,
                firstName: "Olga",
                lastName: "Lorentzon"
            }]
        }),
        contentType: "application/json"
    }).done(function (data) {
        console.log(data);
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText || textStatus);
    });
});

$("#delete").click(function () {
    var id = $("#id").val();
    console.log("Deleting item having id: " + id);

    $.ajax({
        url: url + id,
        type: "POST",
        headers: { "X-HTTP-Method-Override": "DELETE" }
    }).done(function (data) {
        console.log("OK!");
    }).fail(function (e) {
        console.log("ERROR!");
    }).always(function () {
    });
});
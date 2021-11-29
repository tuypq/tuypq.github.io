$("#site-map").jstree({
    "types": {
        "default": {
            "icon": "fa fa-folder-open treeFolderIcon",
        }
    },
    "plugins": ["json_data", "types", "wholerow"],
    "core": {
        "multiple": false,
        "data": {
            "url": function (node) {
                var url = `/site-map/get`;
                return url;
            },
            "data": function (node) {
                return { "id": node.id, "portalId": portalId };
            }
        }
    },
});

$(`#site-map`).on("select_node.jstree", function (e, data) {
    var href = "";
    if (data.node.original.slug == null) {
        href = "#";
    } else {
        href = data.node.original.slug;
    }
    document.location.href = href;
});

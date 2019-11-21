window.onload = function() {
  const form = document.getElementById("simpleForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Submitting......");
  });

  tinymce.init({
    selector: "#body",
    height: 400,
    menubar: "file edit format view help",
    plugins:
      "advlist lists link autolink autosave code preview searchreplace wordcount media table emoticons image imagetools",
    toolbar:
      "bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | forecolor backcolor emoticons | code preview searchreplace",
    images_upload_url: "/",
    images_upload_handler: function(bloginfo, success, failure) {
      // success(url);
    },
    relative_urls: false,
    automatic_uploads: true
  });
};

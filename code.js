function clickMenuButton () {
  var menuButton = document.querySelector('[aria-label="Action options"]') || 0;
  if(menuButton.classList.length > 0) {
    menuButton.click();  
  } else {
    setTimeout(clickMenuButton, 300);
  }
}

function clickArchiveButton () {
  const isObject = (n) => {
    return typeof n === 'object' && n !== null;  
  }
  var archiveButton = document.getElementsByClassName("hu5pjgll lzf7d6o1 sp_5BisIjaS1oX sx_640612")[0] || 0;
  if(isObject(archiveButton)) {
    archiveButton.click();
  } else {
    setTimeout(clickArchiveButton, 300);
  }
}

function fbArchive (loops = 1, j = 1) {
  clickMenuButton();
  clickArchiveButton();

  if(j % 5 == 0) {
    window.scrollTo(0,document.body.scrollHeight);
  }

  if(j == loops) {
    window.scrollTo(0,0);
    return;
  }

  setTimeout(function()
  {
    fbArchive(loops,j + 1);
  }, 400);
}

javascript: (function() {
    let draggable = document.createElement('div');
    draggable.style.position = 'absolute';
    draggable.style.width = '350px';
    draggable.style.height = '300px';
    draggable.style.backgroundColor = '#4a90e2';
    draggable.style.color = '#ffffff';
    draggable.style.padding = '20px';
    draggable.style.borderRadius = '12px';
    draggable.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    draggable.style.cursor = 'grab';
    draggable.style.zIndex = '1000';
    draggable.style.top = '100px';
    draggable.style.left = '100px';
    draggable.style.transition = 'all 0.3s ease';

    let header = document.createElement('div');
    header.style.fontSize = '22px';
    header.style.fontWeight = '600';
    header.style.marginBottom = '20px';
    header.style.textAlign = 'center';
    header.innerText = '1undred ult gui';
    draggable.appendChild(header);

    let buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginBottom = '20px';

    let minimizeButton = document.createElement('button');
    minimizeButton.innerText = '−';
    minimizeButton.style.backgroundColor = '#f0f0f0';
    minimizeButton.style.color = '#444';
    minimizeButton.style.fontSize = '18px';
    minimizeButton.style.width = '30px';
    minimizeButton.style.height = '30px';
    minimizeButton.style.border = 'none';
    minimizeButton.style.borderRadius = '50%';
    minimizeButton.style.cursor = 'pointer';
    minimizeButton.style.transition = 'background-color 0.2s ease, transform 0.2s ease';

    minimizeButton.onmouseover = function() {
        minimizeButton.style.backgroundColor = '#ddd';
        minimizeButton.style.transform = 'scale(1.1)';
    };

    minimizeButton.onmouseout = function() {
        minimizeButton.style.backgroundColor = '#f0f0f0';
        minimizeButton.style.transform = 'scale(1)';
    };

    minimizeButton.onclick = function() {
        draggable.style.transition = 'transform 0.3s ease';
        draggable.style.transform = draggable.style.transform === 'scale(0)' ? 'scale(1)' : 'scale(0)';
    };

    let closeButton = document.createElement('button');
    closeButton.innerText = '×';
    closeButton.style.backgroundColor = '#ff4d4d';
    closeButton.style.color = '#fff';
    closeButton.style.fontSize = '18px';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.2s ease, transform 0.2s ease';

    closeButton.onmouseover = function() {
        closeButton.style.backgroundColor = '#ff1a1a';
        closeButton.style.transform = 'scale(1.1)';
    };

    closeButton.onmouseout = function() {
        closeButton.style.backgroundColor = '#ff4d4d';
        closeButton.style.transform = 'scale(1)';
    };

    closeButton.onclick = function() {
        draggable.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        draggable.style.transform = 'scale(0)';
        setTimeout(() => draggable.remove(), 300);
    };

    buttonContainer.appendChild(minimizeButton);
    buttonContainer.appendChild(closeButton);
    draggable.appendChild(buttonContainer);

    let actionButton1 = document.createElement('button');
    actionButton1.innerText = 'Action 1';
    actionButton1.style.padding = '10px 15px';
    actionButton1.style.border = 'none';
    actionButton1.style.backgroundColor = '#00a8ff';
    actionButton1.style.color = '#fff';
    actionButton1.style.fontSize = '16px';
    actionButton1.style.borderRadius = '6px';
    actionButton1.style.cursor = 'pointer';
    actionButton1.style.marginBottom = '10px';
    actionButton1.style.transition = 'background-color 0.2s ease';

    actionButton1.onmouseover = function() {
        actionButton1.style.backgroundColor = '#0090e6';
    };

    actionButton1.onmouseout = function() {
        actionButton1.style.backgroundColor = '#00a8ff';
    };

    actionButton1.onclick = function() {
        placeholderFunction('Action 1 clicked');
    };

    let actionButton2 = document.createElement('button');
    actionButton2.innerText = 'Action 2';
    actionButton2.style.padding = '10px 15px';
    actionButton2.style.border = 'none';
    actionButton2.style.backgroundColor = '#00a8ff';
    actionButton2.style.color = '#fff';
    actionButton2.style.fontSize = '16px';
    actionButton2.style.borderRadius = '6px';
    actionButton2.style.cursor = 'pointer';
    actionButton2.style.transition = 'background-color 0.2s ease';

    actionButton2.onmouseover = function() {
        actionButton2.style.backgroundColor = '#0090e6';
    };

    actionButton2.onmouseout = function() {
        actionButton2.style.backgroundColor = '#00a8ff';
    };

    actionButton2.onclick = function() {
        placeholderFunction('Action 2 clicked');
    };

    draggable.appendChild(actionButton1);
    draggable.appendChild(actionButton2);

    document.body.appendChild(draggable);

    let offsetX, offsetY;

    draggable.addEventListener("mousedown", function(e) {
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;

        draggable.style.cursor = 'grabbing';

        function onMouseMove(e) {
            draggable.style.transition = 'none';
            draggable.style.left = e.clientX - offsetX + 'px';
            draggable.style.top = e.clientY - offsetY + 'px';
        }

        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            draggable.style.cursor = 'grab';
            draggable.style.transition = 'all 0.3s ease';
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    function placeholderFunction(action) {
        console.log(action);
    }

})();

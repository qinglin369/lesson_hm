/**
 * @func 就地编辑
 * @params { id, parent 父节点, value 默认值}
 * @author ysw
 * @date 2024-06-12
 */
//定义一个构造函数首字母要大写
// function EditInPlace(id, parent, value) {
//     this.id = id;// 跨函数共享属性
//     this.parent = parent || document.body;
//     this.value = value || '这个家伙很懒，什么都没有留下';
//     this.createElement(this.id);
//   }
//   EditInPlace.prototype.createElement = function(id) {
//     // console.log(id);
//     // <div id="ep1"></div>
//     this.containerElement = document.createElement('div');
//     this.containerElement.id = id;
//     this.parent.appendChild(this.containerElement);

//     this.staticElement = document.createElement('span');
//     this.staticElement.innerText = this.value;
//     this.containerElement.appendChild(this.staticElement);
//   }




function EditInPlace(id, parent, value) {
  this.id = id;
  this.parent = parent || document.body;
  this.value = value || '这个家伙很懒，什么都没有留下';
  this.createElement(this.id);
}

EditInPlace.prototype.createElement = function(id) {
  // 创建容器元素
  this.containerElement = document.createElement('div');
  this.containerElement.id = id;
  this.parent.appendChild(this.containerElement);

  // 创建显示文本的元素
  this.staticElement = document.createElement('span');
  this.staticElement.innerText = this.value;
  this.containerElement.appendChild(this.staticElement);

  // 创建输入框
  this.inputElement = document.createElement('input');
  this.inputElement.type = 'text';
  this.inputElement.style.display = 'none';
  this.containerElement.appendChild(this.inputElement);

  // 创建保存按钮
  this.saveButton = document.createElement('button');
  this.saveButton.textContent = '保存';
  this.saveButton.style.display = 'none';
  this.containerElement.appendChild(this.saveButton);

  // 创建取消按钮
  this.cancelButton = document.createElement('button');
  this.cancelButton.textContent = '取消';
  this.cancelButton.style.display = 'none';
  this.containerElement.appendChild(this.cancelButton);

  // 绑定点击事件，进入编辑模式
  this.staticElement.addEventListener('click', () => this.enterEditMode());
  // 绑定保存事件
  this.saveButton.addEventListener('click', () => this.saveEdit());
  // 绑定取消事件
  this.cancelButton.addEventListener('click', () => this.cancelEdit());
};

// 进入编辑模式
EditInPlace.prototype.enterEditMode = function() {
  this.staticElement.style.display = 'none';
  this.inputElement.style.display = 'inline';
  this.saveButton.style.display = 'inline';
  this.cancelButton.style.display = 'inline';
  this.inputElement.value = this.staticElement.innerText;
  this.inputElement.focus();
};

// 保存编辑内容
EditInPlace.prototype.saveEdit = function() {
  this.staticElement.innerText = this.inputElement.value;
  this.exitEditMode();
};

// 取消编辑
EditInPlace.prototype.cancelEdit = function() {
  this.exitEditMode();
};

// 退出编辑模式
EditInPlace.prototype.exitEditMode = function() {
  this.staticElement.style.display = 'inline';
  this.inputElement.style.display = 'none';
  this.saveButton.style.display = 'none';
  this.cancelButton.style.display = 'none';
};





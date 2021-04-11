#### 5.4. 이진 탐색 트리 삭제 
* 매우 복잡함. **경우를 나누어서 이해하는 것이 좋음**

#### 5.4.1. Leaf Node 삭제 
* Leaf Node: Child Node 가 없는 Node
* 삭제할 Node의 Parent Node가 삭제할 Node를 가리키지 않도록 한다. 
<img src="http://www.fun-coding.org/00_Images/tree_remove_leaf.png" width="800" />


#### 5.4.2. Child Node 가 하나인 Node 삭제 
* 삭제할 Node의 Parent Node가 삭제할 Node의 Child Node를 가리키도록 한다.
<img src="http://www.fun-coding.org/00_Images/tree_remove_1child.png" width="800" />


#### 5.4.3. Child Node 가 두 개인 Node 삭제
1. **삭제할 Node의 오른쪽 자식 중, 가장 작은 값을 삭제할 Node의 Parent Node가 가리키도록 한다.**
2. 삭제할 Node의 왼쪽 자식 중, 가장 큰 값을 삭제할 Node의 Parent Node가 가리키도록 한다.
<img src="http://www.fun-coding.org/00_Images/tree_remove_2child.png" width="800" />

##### 5.4.3.1. 삭제할 Node의 오른쪽 자식중, 가장 작은 값을 삭제할 Node의 Parent Node가 가리키게 할 경우
- 삭제할 Node의 오른쪽 자식 선택
- 오른쪽 자식의 가장 왼쪽에 있는 Node를 선택
- 해당 Node를 삭제할 Node의 Parent Node의 왼쪽 Branch가 가리키게 함
- 해당 Node의 왼쪽 Branch가 삭제할 Node의 왼쪽 Child Node를 가리키게 함
- 해당 Node의 오른쪽 Branch가 삭제할 Node의 오른쪽 Child Node를 가리키게 함
- 만약 해당 Node가 오른쪽 Child Node를 가지고 있었을 경우에는, 해당 Node의 본래 Parent Node의 왼쪽 Branch가 해당 오른쪽 Child Node를 가리키게 함

### 5.5. 이진 탐색 트리 삭제 코드 구현과 분석

#### 5.5.1 삭제할 Node 탐색
- 삭제할 Node가 없는 경우도 처리해야 함
  - 이를 위해 삭제할 Node가 없는 경우는 False를 리턴하고, 함수를 종료 시킴


```python
def delete(self, value):
searched = False
self.current_node = self.head
self.parent = self.head
while self.current_node:
    if self.current_node.value == value:
        searched = True
        break
    elif value < self.current_node.value:
        self.parent = self.current_node
        self.current_node = self.current_node.left
    else:
        self.parent = self.current_node
        self.current_node = self.current_node.right

if searched == False:
    return False
```
### 이후부터 Case들을 분리해서, 코드 작성

#### 5.5.2. Case1: 삭제할 Node가 Leaf Node인 경우
<img src="http://www.fun-coding.org/00_Images/tree_remove_leaf_code.png" width="600" />

```python
   if  self.current_node.left == None and self.current_node.right == None:
        if value < self.parent.value:
            self.parent.left = None
        else:
            self.parent.right = None
```
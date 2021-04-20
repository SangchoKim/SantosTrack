### 힙에 데이터 삽입 구현 (Max Heap 예)
- 힙 클래스 구현1 
```python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)

heap = Heap(1)
heap.heap_array

[None, 1]
```

- 힙 클래스 구현2 - insert1
  - 인덱스 번호는 1번부터 시작하도록 변경

<img src="https://www.fun-coding.org/00_Images/heap_ordinary.png">

```python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
        
    def insert(self, data):
        if len(self.heap_array) == 0:
            self.heap_array.append(None)
            self.heap_array.append(data)
            return True
        
        self.heap_array.append(data)
        return True 
```

 힙 클래스 구현3 - insert2
  - 삽입한 노드가 부모 노드의 값보다 클 경우, 부모 노드와 삽입한 노드 위치를 바꿈
  - 삽입한 노드가 루트 노드가 되거나, 부모 노드보다 값이 작거나 같을 경우까지 반복
---
- 특정 노드의 관련 노드 위치 알아내기
  - 부모 노드 인덱스 번호 (parent node's index) = 자식 노드 인덱스 번호 (child node's index) // 2
  - 왼쪽 자식 노드 인덱스 번호 (left child node's index) = 부모 노드 인덱스 번호 (parent node's index) * 2
  - 오른쪽 자식 노드 인덱스 번호 (right child node's index) = 부모 노드 인덱스 번호 (parent node's index) * 2 + 1

<img src="https://www.fun-coding.org/00_Images/heap_insert.png">

```python
class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
        
    def move_up(self, inserted_idx):
        if inserted_idx <= 1:
            return False
        
        parent_idx = inserted_idx // 2
        if self.heap_array[inserted_idx] > self.heap_array[parent_idx]:
            return True
        else:
            return False
        
    def insert(self, data):
        if len(self.heap_array) == 0:
            self.heap_array.append(None)
            self.heap_array.append(data)
            return True
        
        self.heap_array.append(data)
        
        inserted_idx = len(self.heap_array) - 1
        
        while self.move_up(inserted_idx):
            parent_idx = inserted_idx // 2
            self.heap_array[inserted_idx], self.heap_array[parent_idx] = self.heap_array[parent_idx], self.heap_array[inserted_idx]
            inserted_idx = parent_idx
        
        return True


heap = Heap(15)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.insert(4)
heap.insert(20)
heap.heap_array

[None, 20, 10, 15, 5, 4, 8]
```

### 힙에 데이터 삭제 구현 (Max Heap 예)
- 힙 클래스 구현4 - delete1
- 보통 삭제는 최상단 노드 (root 노드)를 삭제하는 것이 일반적임
  - 힙의 용도는 최대값 또는 최소값을 root 노드에 놓아서, 최대값과 최소값을 바로 꺼내 쓸 수 있도록 하는 것임

  ```python
  class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
    
    def pop(self):
        if len(self.heap_array) <= 1:
            return None
        
        returned_data = self.heap_array[1]
        return returned_data
  ```


  - 힙 클래스 구현4 - delete2
  - 상단의 데이터 삭제시, 가장 최하단부 왼쪽에 위치한 노드 (일반적으로 가장 마지막에 추가한 노드) 를 root 노드로 이동

<img src="https://www.fun-coding.org/00_Images/heap_remove.png">

  ```python
  class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
    
    def pop(self):
        if len(self.heap_array) <= 1:
            return None
        
        returned_data = self.heap_array[1]
        del self.heap_array[-1]
        return returned_data

heap = Heap(15)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.insert(4)
heap.insert(20)
heap.heap_array
[None, 20, 10, 15, 5, 4, 8]

heap.pop()
[None, 15, 10, 8, 5, 4]
  ```

 - 힙 클래스 구현4 - delete3
 - root 노드의 값이 child node 보다 작을 경우, root 노드의 child node 중 가장 큰 값을 가진 노드와 root 노드 위치를 바꿔주는 작업을 반복함 (swap)
---
- 특정 노드의 관련 노드 위치 알아내기
  - 부모 노드 인덱스 번호 (parent node's index) = 자식 노드 인덱스 번호 (child node's index) // 2
  - 왼쪽 자식 노드 인덱스 번호 (left child node's index) = 부모 노드 인덱스 번호 (parent node's index) * 2
  - 오른쪽 자식 노드 인덱스 번호 (right child node's index) = 부모 노드 인덱스 번호 (parent node's index) * 2 + 1


  ```python
  class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)
    
    def move_down(self, popped_idx):
        left_child_popped_idx = popped_idx * 2
        right_child_popped_idx = popped_idx * 2 + 1
        
        # case1: 왼쪽 자식 노드도 없을 때
        if left_child_popped_idx >= len(self.heap_array):
            return False
        # case2: 오른쪽 자식 노드만 없을 때
        elif right_child_popped_idx >= len(self.heap_array):
            if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                return True
            else:
                return False
        # case3: 왼쪽, 오른쪽 자식 노드 모두 있을 때
        else:
            if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
                if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                    return True
                else:
                    return False
            else:
                if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                    return True
                else:
                    return False
    
    def pop(self):
        if len(self.heap_array) <= 1:
            return None
        
        returned_data = self.heap_array[1]
        self.heap_array[1] = self.heap_array[-1]
        del self.heap_array[-1]
        popped_idx = 1
        
        while self.move_down(popped_idx):
            left_child_popped_idx = popped_idx * 2
            right_child_popped_idx = popped_idx * 2 + 1

            # case2: 오른쪽 자식 노드만 없을 때
            if right_child_popped_idx >= len(self.heap_array):
                if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                    self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[left_child_popped_idx], self.heap_array[popped_idx]
                    popped_idx = left_child_popped_idx
            # case3: 왼쪽, 오른쪽 자식 노드 모두 있을 때
            else:
                if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
                    if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                        self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[left_child_popped_idx], self.heap_array[popped_idx]
                        popped_idx = left_child_popped_idx
                else:
                    if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                        self.heap_array[popped_idx], self.heap_array[right_child_popped_idx] = self.heap_array[right_child_popped_idx], self.heap_array[popped_idx]
                        popped_idx = right_child_popped_idx
        
        return returned_data
    
    def move_up(self, inserted_idx):
        if inserted_idx <= 1:
            return False
        parent_idx = inserted_idx // 2
        if self.heap_array[inserted_idx] > self.heap_array[parent_idx]:
            return True
        else:
            return False

    def insert(self, data):
        if len(self.heap_array) == 1:
            self.heap_array.append(data)
            return True
        
        self.heap_array.append(data)
        inserted_idx = len(self.heap_array) - 1
        
        while self.move_up(inserted_idx):
            parent_idx = inserted_idx // 2
            self.heap_array[inserted_idx], self.heap_array[parent_idx] = self.heap_array[parent_idx], self.heap_array[inserted_idx]
            inserted_idx = parent_idx
        return True  
  ```
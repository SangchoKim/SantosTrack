## 대표적인 정렬5: 퀵 정렬 (quick sort) 

### 1. 퀵 정렬 (quick sort) 이란?
* <font color='#BF360C'>정렬 알고리즘의 꽃</font>
* 기준점(pivot 이라고 부름)을 정해서, 기준점보다 작은 데이터는 왼쪽(left), 큰 데이터는 오른쪽(right) 으로 모으는 함수를 작성함
* 각 왼쪽(left), 오른쪽(right)은 재귀용법을 사용해서 다시 동일 함수를 호출하여 위 작업을 반복함
* 함수는 왼쪽(left) + 기준점(pivot) + 오른쪽(right) 을 리턴함

### 2. 어떻게 코드로 만들까?
> 퀵소트 알고리즘에 대해서는 위에서 언급이 되었으므로, 이를 구현하기 위한 세부 코드에 대해 연습을 통해 이해합니다.

### 3. 알고리즘 구현
* quicksort 함수 만들기
  - 만약 리스트 갯수가 한개이면 해당 리스트 리턴
  - 그렇지 않으면, 리스트 맨 앞의 데이터를 기준점(pivot)으로 놓기
  - left, right 리스트 변수를 만들고,
  - 맨 앞의 데이터를 뺀 나머지 데이터를 기준점과 비교(pivot)
    - 기준점보다 작으면 left.append(해당 데이터)
    - 기준점보다 크면 right.append(해당 데이터)
  - return quicksort(left) + pivot + quicksort(right) 로 재귀 호출
  
> 리스트로 만들어서 리턴하기: return quick_sort(left) + [pivot] + quick_sort(right)

```python
def qsort(data):
    if len(data) <= 1:
        return data
    
    left, right = list(), list()
    pivot = data[0]
    
    for index in range(1, len(data)):
        if pivot > data[index]:
            left.append(data[index])
        else:
            right.append(data[index])
    
    return qsort(left) + [pivot] + qsort(right)
```

```python
import random

data_list = random.sample(range(100), 10)

qsort(data_list)
[2, 20, 35, 39, 49, 51, 57, 74, 82, 94]
```

<div class="alert alert-block alert-warning">
<strong><font color="blue" size="4em">프로그래밍 연습</font></strong><br>
위 퀵정렬 코드를 파이썬 list comprehension을 사용해서 더 깔끔하게 작성해보기<br>
</div>

```python
def qsort(data):
    if len(data) <= 1:
        return data
    
    pivot = data[0]

    left = [ item for item in data[1:] if pivot > item ]
    right = [ item for item in data[1:] if pivot <= item ]
    
    return qsort(left) + [pivot] + qsort(right)
```

```python
import random

data_list = random.sample(range(100), 10)

qsort(data_list)

[5, 10, 37, 43, 61, 71, 77, 78, 82, 84]
```
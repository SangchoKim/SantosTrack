### 1. 재귀 용법 (recursive call, 재귀 호출)
* 함수 안에서 동일한 함수를 호출하는 형태
* 여러 알고리즘 작성시 사용되므로, 익숙해져야 함

### 2. 재귀 용법 이해
- 예제를 풀어보며, 재귀 용법을 이해해보기

### 예제
- 팩토리얼을 구하는 알고리즘을 Recursive Call 을 활용해서 알고리즘 작성하기

### 예제 - 분석하기
- 간단한 경우부터 생각해보기
  * 2! = 1 X 2
  * 3! = 1 X 2 X 3
  * 4! = 1 X 2 X 3 X 4 = 4 X 3!
- 규칙이 보임: n! = n X (n - 1)!
  1. 함수를 하나 만든다.
  2. 함수(n) 은 n > 1 이면 return n X 함수(n - 1)
  3. 함수(n) 은 n = 1 이면 return n
- 검증 (코드로 검증하지 않고, 직접 간단한 경우부터 대입해서 검증해야 함)
    1. 먼저 2! 부터 
     - 함수(2) 이면, 2 > 1 이므로 2 X 함수(1)
       - 함수(1) 은 1 이므로, return 2 X 1 = 2 맞다!
    2. 먼저 3! 부터 
     - 함수(3) 이면, 3 > 1 이므로 3 X 함수(2)
       - 함수(2) 는 결국 1번에 의해 2! 이므로, return 2 X 1 = 2 
       - 3 X 함수(2) = 3 X 2 = 3 X 2 X 1 = 6 맞다!
    3. 먼저 4! 부터 
     - 함수(4) 이면, 4 > 1 이므로 4 X 함수(3)
       - 함수(3) 은 결국 2번에 의해 3 X 2 X 1 = 6 
       - 4 X 함수(3) = 4 X 6 = 24 맞다! 

### 예제 - 코드 레벨로 적어보기

```python
def factorial(num):
    if num > 1:
        return num * factorial(num - 1)
    else:
        return num
```

```python
for num in range(10):
    print (factorial(num))

0
1
2
6
24
120
720
5040
40320
362880
```

### 3. 재귀 호출의 일반적인 형태
```python
def function(입력):
    if 입력 > 일정값: # 입력이 일정 값 이상이면
        return function(입력 - 1) # 입력보다 작은 값
    else:
        return 일정값, 입력값, 또는 특정값 # 재귀 호출 종료
```

```python
# 일반적인 형태2
def function(입력):
    if 입력 <= 일정값:              # 입력이 일정 값보다 작으면
        return 일정값, 입력값, 또는 특정값              # 재귀 호출 종료
    function(입력보다 작은 값)
    return 결과값
```

```python
def factorial(num):
    if num <= 1:
        return num
    
    return num * factorial(num - 1)
```

```python
for num in range(10):
    print (factorial(num))

0
1
2
6
24
120
720
5040
40320
362880
```

### 재귀 호출은 스택의 전형적인 예
* 함수는 내부적오르 스택처럼 관리된다.

<img src="https://www.fun-coding.org/00_Images/recursivecall.png" />


<div class="alert alert-block alert-warning">
<strong><font color="blue" size="4em">프로그래밍 연습</font></strong><br>
다음 함수를 재귀 함수를 활용해서 완성해서 1부터 num까지의 곱이 출력되게 만드세요
</div>
<pre>
def muliple(data):
    if data <= 1:
        return data
    
    return -------------------------
    
multiple(10)
</pre>
</div>

```python
def multiple(num):
    return_value = 1
    for index in range(1, num + 1):
        return_value = return_value * index
    return return_value
```

```python
def multiple(num):
    if num <= 1:
        return num
    return num * multiple(num - 1)
```

```python
multiple(10)

3628800
```

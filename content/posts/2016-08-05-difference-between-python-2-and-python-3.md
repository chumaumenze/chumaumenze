---
title: Difference between Python 2 and Python 3
published_time: 2016-08-05T22:42:23.761Z
modified_time: 2020-05-01T23:00:23.161Z
expiration_time: 2021-01-01T00:00:00.000Z
published: true
category: tech
tags: [Python, Syntax, Coding, Programming]
description: "Many wonder the difference between Py3 and Py2. Some beginners are not sure which version of Python to learn. While most organizations still enjoys using Python 2.x, it is important to note that while Python 2 is still commonly Python 3.x comes with its perks too. I recommend that you learn Python 3.x and then..."
external_link: "https://codebloks.wordpress.com/2016/08/05/difference-between-python-2-and-python-3/"
---

Many wonder the difference between Py3 and Py2. Some beginners are not sure which version of 
Python to learn. While most organizations still enjoys using Python 2.x, it is important to 
note that while Python 2 is still commonly Python 3.x comes with its perks too. 
I recommend that you learn Python 3.x and then study the differences between both versions 
since Python 3 eliminates many quirks that can unnecessarily pops up.

#### Integer Division

This change is particularly dangerous if you are porting code, or if you are running Python 
3 code in Python 2, since the change in integer division behavior often goes unnoticed and 
usually raises no exceptions (`SyntaxError`).

```python{codeTitle: "Python 2.7.6"}
print '3 / 2 =', 3 / 2
print '3 // 2 =', 3 // 2
print '3 / 2.0 =', 3 / 2.0
print '3 // 2.0 =', 3 // 2.0
```

```text{codeTitle: "Output"}
3 / 2 = 1
3 // 2 = 1
3 / 2.0 = 1.5
3 // 2.0 = 1.0
```

And in python 3:

```python{codeTitle: "Python 3.4.1"}
print ('3 / 2 =', 3 / 2)
print ('3 // 2 =', 3 // 2)
print ('3 / 2.0 =', 3 / 2.0)
print ('3 // 2.0 =', 3 // 2.0)
```

```text{codeTitle: "Output"}
3 / 2 = 1.5
3 // 2 = 1
3 / 2.0 = 1.5
3 // 2.0 = 1.0
```

#### The Print Function

The change in the print syntax is one of the widely known changes. The print statement 
in Python 2 has been replaced the `print()` function in Python 3. In that case, we have 
to enclose the objects we want to print in a parenthesis `()`. Python 2 doesn’t have a 
problem with additional parentheses, but in contrast, Python 3 would raise a `SyntaxError` 
if we called the print function the Python 2 way without the parentheses.

```python{codeTitle: "Python 2.7.6"}
print 'Hello, World!'
print('Hello, World!')
```

```text{codeTitle: "Output"}
Hello, World!
Hello, World!
```

In Python 3,

```python{codeTitle: "Python 3.4.1"}
print 'Hello, World!'
```

```text{codeTitle: "Output"}
File "", line 1
print 'Hello, World!'
^
SyntaxError: invalid syntax
```

#### Raising Exceptions

Where Python 2 accepts some Py2 and Py3 syntax, Python 3 fails to do so and 
raises a `SyntaxError` if we do not enclose the exception argument in parentheses. 

```python{codeTitle: "Python 2.7.6"}
raise IOError "file error"
```

```text{codeTitle: "Output"}
---------------------------------------------------------------------------
IOError                                   Traceback (most recent call last)

 in ()
----> 1 raise IOError, "file error"


IOError: file error
```

```python{codeTitle: "Works in Python 2.x.x & 3.x.x"}
raise IOError("file error")
```

```text{codeTitle: "Output"}
---------------------------------------------------------------------------
IOError                                   Traceback (most recent call last)

 in ()
----> 1 raise IOError("file error")


IOError: file error
```

```python{codeTitle: "Python 3.4.1"}
raise IOError "file error"
```

```text{codeTitle: "Output"}
File "", line 1
    raise IOError, "file error"
                 ^
SyntaxError: invalid syntax
```

#### Handling Exceptions

In Py3, we have to use the keyword `as` while handling exceptions. 

```python{codeTitle: "Python 2.7.6"}
try:
     This_is_the_NameError
 except NameError, err:
     print err, '--> This is the error message'
```

```text{codeTitle: "Output"}
name 'This_is_the_NameError' is not defined --> This is the error message
```

```python{codeTitle: "Python 3.4.1"}
try:
     This_is_the_NameError
 except NameError as err:
     print(err, '--> This is the error message')
```

```text{codeTitle: "Output"}
name 'This_is_the_NameError' is not defined --> This is the error message
```

#### Parsing User Input with `input()`

Fortunately, the `input()` function was fixed in Py3 so that it always stores the user 
inputs as string objects. In order to avoid the dangerous behavour in Py2 to read in 
other types than strings, Py2 users have to use `raw_input()` instead.

#### Importing `__future__` Module

While Python 3.x introduced some Python 2 incompatible syntax, some of its features 
can be imported via the inbuilt `__future__` module in Python 2. It is recommended to 
use this import if you are planning to use Python 3.x support for your code. For example, 
if you want to import Python 3.x integer division in Python 2, we can do this using the 
`__future__`.

```python{codeTitle: "Python 3.4.1"}
from __future__ import division
```

Still unsure which version to use? You can read more from [Python Wiki][pyWiki] and 
[Python-future documentation][pyFuture].

[pyWiki]: https://wiki.python.org/moin/Python2orPython3
[pyFuture]: http://python-future.org/compatible_idioms.html

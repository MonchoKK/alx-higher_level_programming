#include <stdio.h>

void print_python_list(PyObject *p);
void print_python_bytes(PyObject *p);

void print_python_list(PyObject *p) {
    Py_ssize_t size, i;
    PyObject *item;

    if (!PyList_Check(p)) {
        fprintf(stderr, "Invalid Python List\n");
        return;
    }

    size = PyList_Size(p);
    printf("[*] Python list info\n");
    printf("[*] Size of the Python List = %zd\n", size);
    printf("[*] Allocated = %zd\n", ((PyListObject *)p)->allocated);

    for (i = 0; i < size; i++) {
        item = PyList_GetItem(p, i);
        printf("Element %zd: %s\n", i, Py_TYPE(item)->tp_name);
    }
}

void print_python_bytes(PyObject *p) {
    Py_ssize_t size, i;
    char *str;

    if (!PyBytes_Check(p)) {
        fprintf(stderr, "Invalid Python Bytes Object\n");
        return;
    }

    size = PyBytes_Size(p);
    printf("[.] bytes object info\n");
    printf("size: %zd\n", size);
    printf("trying string: %s\n", ((PyBytesObject *)p)->ob_sval);

    printf("first 10 bytes: ");
    str = ((PyBytesObject *)p)->ob_sval;
    if (size < 10)
        printf("%.2x", str[i]);
    else
        for (i = 0; i < 10; i++)
            printf("%.2x", str[i]);
    printf("\n");
}

Another common case in working with bindings is requesting access to the parent binding context. It is because it might be different from the bindingContext of the child and might contain information, which the child has to use. Generally, the bindingContext is inheritable, but not when the elements (items) are created dynamically based on some data source. For example, ListView creates its child items based on an itemТemplate, which describes what the ListView element will look like. When this element is added to the visual tree, it gets for binding context an element from a ListView items array (with the corresponding index). This process creates a new binding context chain for the child item and its inner UI elements. So, the inner UI element cannot access the binding context of the `ListView`. In order to solve this problem, NativeScript binding infrastructure has two special keywords: `$parent` and `$parents`. While the first one denotes the binding context of the direct parent visual element, the second one can be used as an array (with a number or string index). This gives you the option to choose either N levels of UI nesting or get a parent UI element with a given type. Let's see how this works in a realistic example.

<snippet id='parent-binding-xml'/>
<snippet id='parent-binding-code'/>
<snippet id='parent-binding-code-ts'/>
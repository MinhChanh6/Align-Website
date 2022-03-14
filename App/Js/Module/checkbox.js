export default function handleCheckBox() {
    const checkboxBudget = document.querySelectorAll('.cb-budget')
    const checkboxTimeline = document.querySelectorAll('.cb-timeline')
    const checkboxType = document.querySelectorAll('.cb-type');

    checkboxBudget.forEach((item) => {
        item.addEventListener('change', changeEventHandler)
        function changeEventHandler(e) {
            var cbs = document.querySelectorAll('.cb-budget');
            for (var i = 0; i < cbs.length; i++) {
                cbs[i].checked = false;
            }
            item.checked = true;
        }
    })
    checkboxTimeline.forEach((item) => {
        item.addEventListener('change', changeEventHandler)

        function changeEventHandler(e) {
            var cbs = document.querySelectorAll('.cb-timeline');
            for (var i = 0; i < cbs.length; i++) {
                cbs[i].checked = false;
            }
            item.checked = true;
        }
    })
    checkboxType.forEach((item) => {
        item.addEventListener('change', changeEventHandler)
        function changeEventHandler(e) {
            var cbs = document.querySelectorAll('.cb-type');
            for (var i = 0; i < cbs.length; i++) {
                cbs[i].checked = false;
            }
            item.checked = true;
        }
    })


}
// const outsideNotifications = document.querySelector("*:not(.notifications)");
// const notifications = document.querySelector(".notifications");
const notificationBox = document.querySelector(".notification-box");
const notificationsPopup = document.querySelector(".notifications-popup");
const collectionsTextDiv = document.querySelector(".collections-text-div");
const collectionsPopup = document.querySelector(".collections-popup");
const arrow = document.querySelector(".arrow");
const dropMenu = document.querySelector(".drop-menu");
const dropMenuHeader = document.querySelector(".drop-menu-header");
const tasksContainer = document.querySelector(".tasks-container");
const tasks = document.querySelectorAll(".tasks");
const taskText = document.querySelectorAll(".task-text");
const taskTitle = document.querySelectorAll(".task-title");
const taskHidden = document.querySelectorAll(".task-hidden");
const tasksImg = document.querySelectorAll(".tasks > img");
const trialPlan = document.querySelector(".trial-plan");
const x = document.querySelector(".x");
const count = document.querySelector(".count");
const indicator = document.querySelector(".indicator");
const circleSvgs = document.querySelectorAll(".circle-svgs");
const tickCircle1 = document.querySelectorAll(".tick-circle-1");
const tickCircle2 = document.querySelectorAll(".tick-circle-2");
const tickCircle3 = document.querySelectorAll(".tick-circle-3");
const tickCircle4 = document.querySelectorAll(".tick-circle-4");
const tickCircle5 = document.querySelectorAll(".tick-circle-5");
const tickCircle6 = document.querySelectorAll(".tick-circle-6");
const tickCircle7 = document.querySelectorAll(".tick-circle-7");


let selected = [false, false, false, false, false];
let countNum = 0;
let indicatorClass = "indicator-1";
let indicatorRemoveClass = "indicator-1-remove";
let clicked = [false, false, false, false, false];
let clicke = false;
let pointerHasNotLeft = true;

notificationBox.addEventListener("click", () => {
  notificationsPopup.classList.toggle("display-none");
  collectionsPopup.classList.add("display-none");
  notificationBox.classList.toggle("notification-box-clicked");
})

// outsideNotifications.addEventListener("click", () => {
//   notificationsPopup.classList.add("display-none");
// })

collectionsTextDiv.addEventListener("click", () => {
  collectionsPopup.classList.toggle("display-none");
  notificationsPopup.classList.add("display-none");
  collectionsTextDiv.classList.toggle("collections-text-div-clicked");
})

arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate");
    arrow.classList.add("arrow-clicked");
    setTimeout(() => {
        arrow.classList.remove("arrow-clicked");
    }, 100);
    // dropMenu.classList.toggle("drop-menu-before");
    // dropMenu.classList.toggle("drop-menu-after");
    tasksContainer.classList.toggle("display-none");   

    for (let j = 0; j < tasks.length; j++){
            if (j !== 0){
                taskHidden[j].classList.add("display-none");
                tasksImg[j].classList.add("display-none");
                tasks[j].classList.remove("task-clicked");
                taskTitle[j].classList.remove("task-title-clicked");
            }
        }
        taskHidden[0].classList.remove("display-none");
        tasksImg[0].classList.remove("display-none");
        tasks[0].classList.add("task-clicked");
        taskTitle[0].classList.add("task-title-clicked");

});
for (let i = 0; i < tasks.length; i++){
    tasks[i].addEventListener("click", () => {
        if (taskHidden[i].classList.contains("display-none")){
            for (let j = 0; j < tasks.length; j++){
                if (j !== i){
                    taskHidden[j].classList.add("display-none");
                    tasksImg[j].classList.add("display-none");
                    tasks[j].classList.remove("task-clicked");
                    taskTitle[j].classList.remove("task-title-clicked");
                }
            }
            taskHidden[i].classList.toggle("display-none");
            tasksImg[i].classList.toggle("display-none");
            tasks[i].classList.toggle("task-clicked");
            taskTitle[i].classList.toggle("task-title-clicked");
        }
    })
}

x.addEventListener("click", () => {
    trialPlan.classList.add("display-none");
})

for (let i = 0; i < circleSvgs.length; i++){
    circleSvgs[i].addEventListener("click", () => {
        if (!selected[i]){
        tickCircle1[i].classList.add("display-none");
        tickCircle3[i].classList.add("display-none");
        tickCircle4[i].classList.add("display-none");
        tickCircle5[i].classList.add("display-none");
        tickCircle6[i].classList.add("display-none");
        tickCircle7[i].classList.add("display-none");
        tickCircle2[i].classList.remove("display-none");
            setTimeout(() => {
                tickCircle2[i].classList.add("display-none");
                tickCircle1[i].classList.add("display-none");
                tickCircle4[i].classList.add("display-none");
                tickCircle5[i].classList.add("display-none");
                tickCircle6[i].classList.add("display-none");
                tickCircle7[i].classList.add("display-none");
                tickCircle3[i].classList.remove("display-none");
                setTimeout(() => {
                    tickCircle2[i].classList.add("display-none");
                    tickCircle3[i].classList.add("display-none");
                    tickCircle1[i].classList.add("display-none");
                    tickCircle5[i].classList.add("display-none");
                    tickCircle6[i].classList.add("display-none");
                    tickCircle7[i].classList.add("display-none");
                    tickCircle4[i].classList.remove("display-none");
                        tickCircle2[i].classList.add("display-none");
                        tickCircle3[i].classList.add("display-none");
                        tickCircle4[i].classList.add("display-none");
                        tickCircle1[i].classList.add("display-none");
                        tickCircle6[i].classList.add("display-none");
                        tickCircle7[i].classList.add("display-none");
                        tickCircle5[i].classList.remove("display-none");
                        tickCircle5[i].classList.add("loading");
                    setTimeout(() => {

                        setTimeout(() => {
                            setTimeout(() => {
                            tickCircle2[i].classList.add("display-none");
                            tickCircle3[i].classList.add("display-none");
                            tickCircle4[i].classList.add("display-none");
                            tickCircle5[i].classList.add("display-none");
                            tickCircle1[i].classList.add("display-none");
                            tickCircle7[i].classList.add("display-none");
                            tickCircle6[i].classList.remove("display-none");
                            setTimeout(() => {
                                tickCircle2[i].classList.add("display-none");
                                tickCircle3[i].classList.add("display-none");
                                tickCircle4[i].classList.add("display-none");
                                tickCircle5[i].classList.add("display-none");
                                tickCircle6[i].classList.add("display-none");
                                tickCircle1[i].classList.add("display-none");
                                tickCircle7[i].classList.remove("display-none");
                            }, 40);
                        }, 40);
                    }, 40);
                    tickCircle5[i].classList.remove("loading");
                        }, 100);
                }, 40);
            }, 40);
            selected[i] = true;
            countNum++;
            count.textContent = countNum;
            indicatorClass = "indicator-" + countNum.toString();
            indicatorRemoveClass = "indicator-" + countNum.toString() + "-remove";
            indicator.classList.remove(indicatorRemoveClass);
            indicator.classList.add(indicatorClass);
            clicked[i] = true;
            clicke = true;
            let counter = 0;
            for (let k = i; k < circleSvgs.length; k = (k + 1) % 5) {
                if (clicked[k] === false){
                    // nextIncomplete = i;

                        const clickEvent = new MouseEvent("click", {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        });

                        // Dispatch the click event on the element
                        
                        // tasks[j].dispatchEvent(clickEvent);
                        
                        
                        // if (taskHidden[k].classList.contains("display-none")){
                        //     for (let j = 0; j < tasks.length; j++){
                        //         if (j !== k){
                        //             taskHidden[j].classList.add("display-none");
                        //             tasksImg[j].classList.add("display-none");
                        //             tasks[j].classList.remove("task-clicked");
                        //             taskTitle[j].classList.remove("task-title-clicked");
                        //             console.log(k)
                        //         }

                        //     }
                        //     taskHidden[k].classList.remove("display-none");
                        //     tasksImg[k].classList.remove("display-none");
                        //     tasks[k].classList.toggle("task-clicked");
                        //     taskTitle[k].classList.toggle("task-title-clicked");
                        // }

                    // tasks[j].click();
                    break;
                }
                counter++;
                if (counter === circleSvgs.length) {
                    break;
                }
            }
        } else {
            // tickCircle7[i].classList.add("display-none");
            // tickCircle6[i].classList.remove("display-none");
            //     setTimeout(() => {
            //         tickCircle6[i].classList.add("display-none");
            //         tickCircle5[i].classList.remove("display-none");
            //         setTimeout(() => {
            //             tickCircle5[i].classList.add("display-none");
            //             tickCircle4[i].classList.remove("display-none");
            //             setTimeout(() => {
            //                 tickCircle4[i].classList.add("display-none");
            //                 tickCircle3[i].classList.remove("display-none");
            //                 setTimeout(() => {
            //                     tickCircle3[i].classList.add("display-none");
            //                     tickCircle2[i].classList.remove("display-none");
            //                     setTimeout(() => {
            //                         tickCircle2[i].classList.add("display-none");
            //                         tickCircle1[i].classList.remove("display-none");
            //                     }, 40);
            //                 }, 40);
            //             }, 40);
            //         }, 40);
            //     }, 40);

            tickCircle7[i].classList.add("display-none");
            tickCircle2[i].classList.remove("display-none");
            setTimeout(() => {
                tickCircle2[i].classList.add("display-none");
                tickCircle1[i].classList.remove("display-none");
            }, 200);
            selected[i] = false;
            countNum--;
            count.textContent = countNum;
            indicatorRemoveClass = "indicator-" + (countNum + 1).toString() + "-remove";
            indicatorClass = "indicator-" + (countNum + 1).toString();
            indicator.classList.remove(indicatorClass);
            indicator.classList.remove("indicator-1-remove");
            indicator.classList.remove("indicator-2-remove");
            indicator.classList.remove("indicator-3-remove");
            indicator.classList.remove("indicator-4-remove");
            indicator.classList.remove("indicator-5-remove");
            indicator.classList.add(indicatorRemoveClass);

            clicked[i] = false;
        }
    });

    circleSvgs[i].addEventListener("mouseenter", () => {
        if (clicked[i] === false) {
            tickCircle3[i].classList.add("display-none");
            tickCircle4[i].classList.add("display-none");
            tickCircle5[i].classList.add("display-none");
            tickCircle6[i].classList.add("display-none");
            tickCircle7[i].classList.add("display-none");
            tickCircle1[i].classList.add("hover");
            pointerHasNotLeft = true;
            setTimeout(() => {
                tickCircle1[i].classList.remove("hover");
                if (pointerHasNotLeft) {
                    tickCircle1[i].classList.add("display-none");
                    tickCircle2[i].classList.remove("display-none");
                }
            }, 100);
        }
    });

    circleSvgs[i].addEventListener("mouseleave", () => {
        if (clicked[i] === false) {
            tickCircle2[i].classList.add("display-none");
            tickCircle3[i].classList.add("display-none");
            tickCircle4[i].classList.add("display-none");
            tickCircle5[i].classList.add("display-none");
            tickCircle6[i].classList.add("display-none");
            tickCircle7[i].classList.add("display-none");
            tickCircle1[i].classList.remove("display-none");
            pointerHasNotLeft = false;
        }
        // tickCircle1[i].classList.remove("display-none");

    });
}


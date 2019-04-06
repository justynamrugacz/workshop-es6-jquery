
import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(selectorName) {
        super(selectorName);
        console.log(this.getName());

    }
    changeNumber(root) {
        console.log(root);
        let spanNum = root.children().eq(0);
        spanNum.attr('contenteditable', 'true')
        spanNum.trigger('focus');
    }
    add(numberX, numberY) {
        let numX = numberX.join('') * 1;
        let numY = numberY.join('') * 1;
        let sum = numX + numY;
        let sumArr = [...sum.toString()];
        let resultArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        sumArr.reverse().forEach((element, index) => {
            let indexFromTheEnd = resultArr.length - 1 - index;
            resultArr[indexFromTheEnd] = element * 1;
        });

        return resultArr;
    }

    updateResult() {
        let resultSpans = this.$calculatorDOMElement.find('.result-bit span');
        for (let i = resultSpans.length - 1, j = 0; i >= 0; i-- , j++) {
            resultSpans.eq(i).text(this.resultNumberArray[j])
        }
       
    }

    initEvents() {
        super.initEvents();
        const spanNumberSelector = '.display-number__value--zero';
        // $(spanNumberSelector).on('focusin', function(){
        //     console.log("Saving value " + $(this).val());
        //     $(this).data('val', $(this).text());
        // });
        // $(spanNumberSelector).on('input', function (e) {
        //     if($(e.target).text().length > 1){
        //         $(e.target).text( $(this).data('val'));
        //     }
        // });
        $(spanNumberSelector).on('keyup', function () {
            const max = 9;
            if ($(this).text() > max) {
                $(this).text(max);
            }
        });
        $(spanNumberSelector).on('keydown', function (e) {
            
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 ||
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        })

        $('.operator-bar').find('span').on('click', () => {
            this.checkNumber();
            this.updateResult();
        })
    }
}

export { DecCalculator };

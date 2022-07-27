# Filament Copyable

Copyable Text Column and Field for Filament PHP.

![Screenshot of Login](./filament-copyable-column.PNG)
![Screenshot of Login](./copyable-text-field.PNG)

## Installation

You can install the package via composer:

```bash
composer require saadj55/filament-copyable
```
## Usage
### Column
In in your Table Schema:

```php

\Saadj55\FilamentCopyable\Tables\Columns\CopyableTextColumn::make('name')

```
You can make the icon to only appear on hover with the `->animated()` method, setting a custom [heroicon](https://heroicons.com/) can be done with e.g. `->icon("heroicon-o-duplicate")`.

### Field

```php

\Saadj55\FilamentCopyable\Forms\Components\CopyableTextInput::make('name')

```
## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

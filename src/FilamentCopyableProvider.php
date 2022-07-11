<?php

namespace Saadj55\FilamentCopyable;

use Filament\PluginServiceProvider;
use Spatie\LaravelPackageTools\Package;

class FilamentCopyableProvider extends PluginServiceProvider
{
    public static string $name = 'filament-copyable';

    public function configurePackage(Package $package): void
    {
        $package->name(self::$name)
            ->hasConfigFile()
            ->hasViews();
    }
    /**
     * @var string[]
     */
    protected array $beforeCoreScripts = [
        'filament-copyable' => __DIR__ . '/../dist/filament-copyable.js',
    ];

    public function boot(): void
    {
        parent::boot();

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'filament-copyable');
        $this->publishes([
            __DIR__ . '/../config' => config_path(),
        ], 'filament-copyable-config');

    }
}